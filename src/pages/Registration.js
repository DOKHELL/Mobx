import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import {Link as RouteLink} from "react-router-dom";
import {Formik} from "formik";
import BaseInput from "../components/BaseInput";
import {TextField} from "formik-material-ui";
import Button from "@material-ui/core/Button";
import {SignUpSchema} from "../components/ValidateSchema";
import {inject, observer} from "mobx-react";
import Error from "../components/Error";

@inject('authStore')
@observer
class Registration extends Component{

    render() {

        return (
            <Box
                width="100%"
                margin='auto'
                maxWidth='1140px'>
                <Box
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
                >Sign Up</Box>
                    <Link
                        to={'/login'}
                        component={RouteLink}
                        underline='hover'
                        color='textSecondary'
                    >Have an account?</Link>
                    <Formik
                        initialValues={{ username: '', email: '', password: '' }}
                        validationSchema={SignUpSchema}
                        onSubmit={this.props.authStore.fetchRegister}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting, status}) => (

                            <form onSubmit={handleSubmit}>
                                <BaseInput
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    value={values.username}
                                    onChange={handleChange}
                                    component={TextField}
                                    touch={touched.username}
                                    errors={errors.username}
                                />
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
                                {status ?
                                    <Error message={'Email or password is already in use'}/> : null}
                                <Button
                                    size='large'
                                    disabled={isSubmitting}
                                    type='submit'
                                    variant="contained"
                                    color="secondary"
                                >
                                    {isSubmitting ? 'Loading': 'Sign up'}
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Box>
        )
    }
}

export default Registration;