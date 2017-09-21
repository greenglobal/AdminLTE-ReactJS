import React from 'react';
import PropTypes from 'prop-types';

export default function(WrappedComponent) {
  class HOC extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.validators = {};

      if (this.props.bindValidator && this.props.bindValidator.props.validators) {
        this.validators = this.props.bindValidator.props.validators;
      }
    }

    validate() {
      if (typeof this.validator.validate != "function") {
        console.log("Component doesn't have validate() method: ", this.refs.wrappedComponent)
      } else {
        return this.validator.validate();
      }
    }

    componentDidMount() {
      this.validator = this.refs.wrappedComponent;

      if (this.props.channel) {
        if (!this.validators[this.props.channel]) {
          this.validators[this.props.channel] = [];
        }

        this.validators[this.props.channel].push(this);
      }
    }

    componentWillReceiveProps(nextProps) {
      this.validator = this.refs.wrappedComponent;

      if (nextProps.channel) {
        if (!this.validators[nextProps.channel]) {
          this.validators[nextProps.channel] = [];
        }

        this.validators[nextProps.channel].push(this);
      }
    }

    componentWillUnmount() {
      this.validator = {};
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent ref='wrappedComponent' {...this.props} validators={this.validators}/>;
    }
  };

  HOC.propTypes = {
    validators: PropTypes.object,
    channel: PropTypes.string,
    bindValidator: PropTypes.object
  }

  HOC.defaultProps = {
    validators: {}
  }

  return HOC;
}
