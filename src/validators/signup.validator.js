import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
    first_name: Yup.string().required("Required!").min(2, "Too short!"),
    last_name: Yup.string().required("Required!").min(2, "Too short!"),
    email: Yup.string().required("Required!").email("Invalid email format!"),
    password: Yup.string().required("Required!").min(6, "Too short!"),
    confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match!"
    ),
});