import React, {Component} from "react";
import {Link as RouteLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import {inject, observer} from "mobx-react";
import { Formik } from 'formik';
import * as Yup from 'yup'
import '../css/main.css'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { TextField } from 'formik-material-ui';
import BaseInput from "../components/BaseInput";

@inject('authStore')
@observer

class Login extends Component {

    render() {

        const SignInSchema = Yup.object().shape({
            email: Yup.string()
               .email('Invalid email')
               .required('Required'),
            password: Yup.string()
                .min(6, 'Too Short')
                .max(20, 'Too Long')
                .required('Required')
        });

        return (
            <Box
                width="100%"
                margin='auto'
                maxWidth='1140px'
            ><Box
                    width="100%"
                    textAlign='center'
                    margin='auto'
                    maxWidth='500px'
                ><Box
                        display='block'
                        fontSize='40px'
                        color='green'
                        component="span"
                        m={1}
                    >Sign In</Box>
                        <Link
                            to={'/register'}
                            component={RouteLink}
                            underline='hover'
                            color='textSecondary'
                        >Need an account?</Link>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={SignInSchema}
                            onSubmit={this.props.authStore.fetchLogin}
                        >
                            {({ values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (

                                <form onSubmit={handleSubmit}>
                                    <BaseInput
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        value={values.email}
                                        onChange={handleChange}
                                        component={TextField}
                                        touch={touched.email}
                                        errors={errors.email}
                                    />
                                    <BaseInput
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        value={values.password}
                                        onChange={handleChange}
                                        component={TextField}
                                        touch={touched.password}
                                        errors={errors.password}
                                    />
                                    <Button
                                        size='large'
                                        disabled={isSubmitting}
                                        type='submit'
                                        variant="contained"
                                        color="secondary"
                                    >
                                        {isSubmitting ? 'Loading': 'Sign in'}
                                    </Button>
                                </form>
                            )}
                        </Formik>
                </Box>
            </Box>
        )
    }
}

export default Login;