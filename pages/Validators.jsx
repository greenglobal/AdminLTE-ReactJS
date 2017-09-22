import React, {PropTypes} from 'react';
import {MainLayout} from 'components/layouts';
import {Link} from 'react-router-dom';
import * as NotificationActions from 'base/actions/notification';
import {connect} from 'react-redux';
import {Input, EmailInput, NumberInput} from 'components/UI/Form';

class Validators extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: '',
      email: 'sdfadasfdsa',
      myNumber: '3423423a'
    }

    this.props.validators['testGroup'] = [];
  }

  checkValidate(){
    let pass = true;

    this.props.validators['testGroup'].map(validator => {
      if (pass) {
        pass = validator.validate();
      } else {
        validator.validate();
      }
    });

    return pass;
  }

  onChange(name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <MainLayout>
        <div>
          <Input className="" label="Test" value={this.state.text} required={'This field is required'} maxLength={40} onChange={this.onChange.bind(this, 'text')} bindValidator={this} channel="testGroup"
           validationText="This field is not allowed to be empty"/>

          <EmailInput className="" label="Email" value={this.state.email}
            required={'This field is required'}
            maxLength={40} onChange={this.onChange.bind(this, 'email')} bindValidator={this} channel="testGroup"
           validationText="Invalid email"/>

          <NumberInput className="" label="Number" value={this.state.myNumber}
            required={'This field is required'} maxLength={40} onChange={this.onChange.bind(this, 'myNumber')} bindValidator={this} channel="testGroup"
          validationText="Value of this field must be a number"/>

          <button type='button' onClick={this.checkValidate.bind(this)}>Test validation</button>
        </div>
      </MainLayout>
    );
  }
}

Validators.defaultProps = {
  validators: {}
}

export default connect()(Validators);
