import React from 'react';
import { PropTypes } from 'prop-types';
import { ShowIf } from 'components/utils';
import {validatable} from 'components/utils';
import Input from './Input.jsx';
import shortid from 'shortid';

class NumberInput extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value,
      isValid: true
    }
  }

  componentDidMount() {
    this.id = shortid();
  }
  
  onChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.onChange(e);
  }

  validate() {
    let validatorHOC = this.props.validators['testNumber'][0];
    let InputComponent = validatorHOC.validator;

    if (!this.props.required && !InputComponent.value()) {
      InputComponent.setState({
        isValid: true
      });

      return true;
    } else {

      let  pass = validatorHOC.validate();
      if (!pass)
        return pass;

      if (isNaN(this.value())) {
        InputComponent.setState({
          isValid: false,
          validationText: this.props.validationText
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
    return this.props.validators['testNumber'][0].validator.value();
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
        bindValidator={this} channel="testNumber"
        validationText="This field is required"
       />
    );
  }
}


NumberInput.defaultProps = {
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

export default validatable(NumberInput);
