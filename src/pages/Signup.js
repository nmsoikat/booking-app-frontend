import React from "react";
import TextError from "../components/ui/TextError";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { signupValidationSchema } from "../validators/signup.validator";
import toast from "react-hot-toast";

export default function Signup() {
    const navigate = useNavigate();

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const onSubmit = async (values, { resetForm }) => {
        const formData = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
        }

        const { data } = await axios.post('/auth/signup', formData)

        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("role", data.role);

        if (data.role === 'admin') {
            navigate("/admin-dashboard");
        } else if (data.role === 'user') {
            navigate("/user-profile");
        } else {
            navigate("/");
        }

        toast.success('Signup Successfully!')
        resetForm();
    }

    // Login user redirect to dashboard
    const loginUserRole = sessionStorage.getItem('role')
    if (loginUserRole === 'admin') {
        return <Navigate to="/admin-dashboard" />;
    } else if (loginUserRole === 'user') {
        return <Navigate to="/user-profile" />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Signup</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={signupValidationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">First Name</label>
                            <Field
                                type="text"
                                name="first_name"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your first name"
                            />
                            <ErrorMessage name="first_name" component={TextError} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Last Name</label>
                            <Field
                                type="text"
                                name="last_name"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your last name"
                            />
                            <ErrorMessage name="last_name" component={TextError} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your password"
                            />
                            <ErrorMessage name="password" component={TextError} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                            <Field
                                type="password"
                                name="confirm_password"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Confirm your password"
                            />
                            <ErrorMessage name="confirm_password" component={TextError} />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                        >
                            Register
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
