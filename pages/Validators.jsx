import React, {PropTypes} from 'react';
import {MainLayout} from 'components/layouts';
import {Link} from 'react-router-dom';
import * as NotificationActions from 'base/actions/notification';
import {connect} from 'react-redux';
import {Input} from 'components/UI/Form';

class Validators extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: ''
    }

    this.props.validators['testGroup'] = [];
  }

  checkValidate(){
    let pass = true;
    this.props.validators['testGroup'].map(validator => {
      if (pass) {
        pass = validator.validate();
      }
    });

    return pass;
  }

  onChange(name, e) {
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <MainLayout>
        <div>
          <Input className="" label="Test" value={this.state.text} require={true} maxLength={40} onChange={this.onChange.bind(this, 'text')} bindValidator={this} channel="testGroup"/>
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
