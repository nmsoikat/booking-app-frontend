import React from "react";
import axios from 'axios';
import TextError from "../components/ui/TextError";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from '../validators/login.validator'
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    }

    const onSubmit = async (values, { resetForm }) => {
        const { data } = await axios.post('/auth/login', values)

        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("role", data.role);

        if (data.role === 'admin') {
            navigate("/admin-dashboard");
        } else if (data.role === 'user') {
            navigate("/user-profile");
        } else {
            navigate("/");
        }

        toast.success('Login Successfully!')
        resetForm();
    }

    // Login user redirect to dashboard
    const loginUserRole = sessionStorage.getItem('role')
    if (loginUserRole == 'admin') {
        return <Navigate to="/admin-dashboard" />;
    } else if (loginUserRole == 'user') {
        return <Navigate to="/user-profile" />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className="md-4">
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <Field
                                type="text"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className="md-4">
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your password"
                            />
                            <ErrorMessage name="password" component={TextError} />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
