import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

class ForgotPasswordForm extends Component {
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
        this.props.fetchUser(values.email, user => {
            if (user) {
                this.props.history.push('/login');
            }
            else {
                values.email = '';
                throw new SubmissionError({ email: 'Email is not registered' });
            }
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <p className="has-text-weight-light">We will send link to your email to reset your password.</p>
                <br />
                <Field
                    label="Email"
                    type="email"
                    name="email"
                    component={this.renderField} />
                <div className="submit-wrapper">
                    <button type="submit" className="button is-primary is-uppercase has-text-white has-text-weight-light">Forgot Password</button>
                    <Link to="/login" className="has-text-weight-light">Back to login</Link>
                </div>
            </form>
        );
    }
}

const validate = values => {
    const errors = {}

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Enter your valid email address";
    }

    if (!errors) {
        errors.fieldError = 'is-danger';
    }

    return errors;
}

export default connect(null, { fetchUser })(
    reduxForm({
        validate,
        form: 'ForgotPasswordForm'
    })(ForgotPasswordForm)
);