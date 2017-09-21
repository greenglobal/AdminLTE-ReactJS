import React from 'react';
import { PropTypes } from 'prop-types';
import { ShowIf } from 'components/utils';
import {validatable} from 'components/utils';
import Input from './Input.jsx';

class EmailInput extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value,
      isValid: true
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.onChange(e);
  }

  validate() {
    let validatorHOC = this.props.validators['testEmail'][0];
    let InputComponent = validatorHOC.validator;

    if (!this.props.required && !InputComponent.value()) {
      InputComponent.setState({
        isValid: true
      });

      return true;
    } else {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let  pass = validatorHOC.validate();
      if (!pass)
        return pass;



      if (!re.test(this.value())) {
        InputComponent.setState({
          isValid: false,
          validationText: 'The email must be a valid email address'
        });

        InputComponent.focus();

        return false;
      } else {
        InputComponent.setState({
          isValid: true
        });
        return true;
      }
    }
  }

  handleFocus(e) {
    e.target.select();
  }

  value() {
    return this.props.validators['testEmail'][0].validator.value();
  }

  render() {
    return (
      <Input
        style={{textAlign: this.props.align}}
        type='email'
        ref={(input) => {this.input = input}}
        value={this.state.value}
        placeholder={this.props.placeholder}
        name={this.props.name}
        label={this.props.label}
        required={this.props.required}
        maxLength={this.props.maxLength}
        bindValidator={this} channel="testEmail"
        validationText="This field is required"
       />
    );
  }
}


EmailInput.defaultProps = {
  type: '',
  className: 'input-group',
  label: '',
  align: 'left',
  onChange: function() {
    console.log('Need to assign onChange method');
  },
  placeholder: null,
  require: false,
  maxLength: 255,
  name:'',
  validationText: 'error'
}

export default validatable(EmailInput);
