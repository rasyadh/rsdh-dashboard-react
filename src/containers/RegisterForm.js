import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { createUser, fetchUser } from '../actions/userActions'

class RegisterForm extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `input ${touched && error ? 'is-danger' : ''}`;
        return (
            <div className="field">
                <label className="label has-text-weight-light">{field.label}</label>
                <div className="control">
                    <input
                        className={className}
                        type={field.type}
                        {...field.input} />
                </div>
                {touched && (
                    <p className="help is-danger">{error}</p>
                )}
            </div>
        );
    }

    onSubmit(values) {
        this.props.createUser({
            name: values.name,
            email: values.email,
            password: values.password
        }, res => {
            if (res) {
                this.props.history.push('/login');
            }
            else {
                values.password = '';
                values.confirmPassword = '';
                throw new SubmissionError({ email: 'Email is already registered' });
            }
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Name"
                    type="text"
                    name="name"
                    component={this.renderField} />
                <Field
                    label="Email"
                    type="email"
                    name="email"
                    component={this.renderField} />
                <Field
                    label="Password"
                    type="password"
                    name="password"
                    component={this.renderField} />
                <Field
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    component={this.renderField} />
                <button type="submit" className="button is-primary is-uppercase has-text-white has-text-weight-light">Register</button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = "Enter your full name";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Enter your valid email address";
    }
    if (!values.password) {
        errors.password = "Enter your password";
    }
    else if (values.password.length < 8) {
        errors.password = "Password must be 8 character or more";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Re-enter your password";
    }
    else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Confirm Password not match with password";
    }

    if (!errors) {
        errors.fieldError = 'is-danger';
    }

    return errors;
}

export default connect(null, { createUser, fetchUser })(
    reduxForm({
        validate,
        form: 'RegisterUserForm'
    })(RegisterForm)
);