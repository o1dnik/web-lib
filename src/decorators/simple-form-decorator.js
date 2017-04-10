import React, {PropTypes} from 'react';
import {has, mapValues} from 'lodash-es';

export default (options) => {

  options = {initialValues: {}, validators: {}, ...options};

  return Component => class SimpleFormDecorator extends React.Component {
    static propTypes = {
      onSubmit: PropTypes.func,

      submitting: PropTypes.bool,

      validators: PropTypes.object,

      initialValues: PropTypes.object
    };

    static defaultProps = {
      submitting: false,
      initialValues: options.initialValues,
      validators: options.validators
    };

    state = {
      initialValues: {...this.props.initialValues},
      values: {...this.props.initialValues},
      dirty: mapValues(this.props.initialValues, () => false),
      touched: mapValues(this.props.initialValues, () => false),
      errors: mapValues(this.props.initialValues, () => null),
      isDirty: false,
      isTouched: false,
      isValid: false
    }

    render() {

      return (
        <Component
          {...this.props}
          {...this.state}
          handleFieldChange={this.handleFieldChange}
          handleFieldBlur={this.handleFieldBlur}
          getMetaForField={this.getMetaForField}
          resetForm={this.resetForm}
          reinitializeForm={this.reinitializeForm}
        />
      );
    }

    handleFieldChange = (e) => {
      if (e) e.preventDefault();

      const {value, name} = e.target;

      const error = this.validateField(value, name);

      this.setState((prevState) => {

        const dirty = {
          ...prevState.dirty,
          [name]: value !== prevState.initialValues[name]
        };

        const errors = {...prevState.errors, [name]: error};

        return {
          values: {...prevState.values, [name]: value},
          dirty,
          errors,
          isDirty: Object.keys(dirty).some(i => dirty[i] !== false),
          isValid: Object.keys(errors).every(i => errors[i] === null)
        };
      });

    }

    handleFieldBlur = (e) => {
      if (e) e.preventDefault();

      const {value, name} = e.target;

      const error = this.validateField(value, name);

      this.setState((prevState) => {

        const touched = {...prevState.touched, [name]: true};
        const errors = {...prevState.errors, [name]: error};

        return {
          touched,
          errors,
          isTouched: Object.keys(touched).some(i => touched[i] === true),
          isValid: Object.keys(errors).every(i => errors[i] === null)
        };
      });

    }

    validateField = (value, name) => {

      const {validators} = this.props;

      let error = null;

      if (
        has(validators, name) && Array.isArray(validators[name])
      ) {
        validators[name].forEach(fn => {
          if (error) return;
          error = fn(value, this.state.values);
        });
      }

      return error;

    }

    getMetaForField = (name) => {

      const {errors, touched, dirty} = this.state;

      return {
        touched: touched[name],
        invalid: errors[name] !== null,
        dirty: dirty[name],
        valid: errors[name] === null,
        error: errors[name]
      };

    }

    resetForm = (e) => {
      if (e) e.preventDefault();

      this.setState((prevState) => ({
        values: {...prevState.initialValues},
        dirty: mapValues(prevState.initialValues, () => false),
        errors: mapValues(prevState.initialValues, () => null),
        touched: mapValues(prevState.initialValues, () => false),
        isDirty: false,
        isTouched: false,
        isValid: false
      }));
    }

    reinitializeForm = (values) => {

      this.setState((prevState) => ({

        initialValues: {
          ...Object.assign({}, values || prevState.values)
        },

        values: {
          ...Object.assign({}, values || prevState.values)
        },

        dirty: mapValues(
          Object.assign({}, values || prevState.values),
          () => false
        ),
        errors: mapValues(
          Object.assign({}, values || prevState.values),
          () => null
        ),
        touched: mapValues(
          Object.assign({}, values || prevState.values),
          () => false
        ),

        isDirty: false,
        isTouched: false,
        isValid: false
      }));
    }

  };

};
