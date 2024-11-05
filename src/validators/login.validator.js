import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("Required!").email("Invalid email format!"),
    password: Yup.string().required("Required!").min(6, "Too short!"),
});