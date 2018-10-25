import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { fetchUser } from '../actions/userActions';

class LoginForm extends Component {
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
        )
    }

    onSubmit(values) {
        this.props.fetchUser(values.email, user => {
            if (user) {
                if (!values.email === user.email) {
                    throw new SubmissionError({ email: 'Email does not exist' });
                }
                else if (values.password !== user.password) {
                    values.password = '';
                    throw new SubmissionError({ password: 'Wrong password' });
                }
                else {
                    this.props.history.push('/');
                }
            }
            else {
                values.password = '';
                throw new SubmissionError({ email: 'Email does not exist' });
            }
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Email"
                    name="email"
                    type="email"
                    component={this.renderField} />
                <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField} />
                <div className="submit-wrapper">
                    <button type="submit" className="button is-primary is-uppercase has-text-white has-text-weight-light">Login</button>
                    <Link to="/forgot-password" className="has-text-weight-light">Forgot Password ?</Link>
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
    if (!values.password) {
        errors.password = "Enter your password";
    }
    else if (values.password.length < 8) {
        errors.password = "Password must be 8 character or more";
    }

    if (!errors) {
        errors.fieldError = 'is-danger';
    }

    return errors;
}

export default connect(null, { fetchUser })(
    reduxForm({
        validate,
        form: 'LoginUserForm'
    })(LoginForm)
)