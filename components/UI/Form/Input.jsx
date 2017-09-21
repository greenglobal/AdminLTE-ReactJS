import React from 'react';
import { PropTypes } from 'prop-types';
import { ShowIf } from 'components/utils';
import {validatable} from 'components/utils';

class Input extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    if (this.props.value != nextProps.value) {
      this.setState({
        value: nextProps.value
      });

      if(nextProps.require && nextProps.value.trim()) {
        this.setState({
          isValid: true
        });
      }
    }
  }

  classNames() {
    if (this.state.isValid) {
      return 'form-group';
    } else {
      return 'form-group has-error';
    }
  }

  validate() {
    if (this.state.value.trim() == '' && this.props.require) {
      this.setState({
        isValid: false
      });
      this.input.focus();
      return false;
    } else {
      this.setState({
        isValid: true
      });
      return true;
    }
  }

  handleFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <div className={`${this.props.className} ` + this.classNames() }>
        <ShowIf condition={this.props.label != ''}>
          <label>
            { this.props.label }
            <ShowIf condition={this.props.require}>
              <span className="text-required">&nbsp;*</span>
            </ShowIf>
          </label>
        </ShowIf>
        <input onFocus={this.handleFocus.bind(this)} style={{textAlign: this.props.align}}
          type="text"
          className={ 'form-control' }
          ref={(input) => {this.input = input}}
          maxLength={this.props.maxLength}
          value={this.state.value}
          onChange={ this.onChange.bind(this) }
          placeholder={this.props.placeholder}
          name={this.props.name}/>
          <ShowIf condition={!this.state.isValid && this.state.value.trim()== ''}>
          <span className="help-block">{this.props.validationText}</span>
        </ShowIf>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  align: PropTypes.string
}

Input.defaultProps = {
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

export default validatable(Input);
