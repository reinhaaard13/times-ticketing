import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useAuth } from "../../contexts/auth-context";

import { Button } from "@chakra-ui/react";

import Input from "../UI/Input";

const SignupSchema = Yup.object().shape({
	user: Yup.string()
		.min(6, "Must be at least 6 characters")
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be at least 8 characters")
		.required("Required"),
});

const LoginForm = (props) => {
	const { login } = useAuth();

	const formik = useFormik({
		initialValues: {
			user: "",
			password: "",
		},
		validationSchema: SignupSchema,
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			try {
				const response = await axios.post('http://localhost:3000/api/users/login', values)
				const {user, token, role, privileges} = response.data
				login(user, token, role, privileges)
			} catch (error) {
				if (error.response.data.message.endsWith("password")) {
					formik.setFieldError("password", error.response.data.message)
				} else {
					formik.setFieldError("user", error.response.data.message)
				}
			} finally {
				formik.setSubmitting(false);
			}
		},
	});

	return (
		<div className="flex flex-col w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Login</h1>
			<form className="flex flex-col" onSubmit={formik.handleSubmit}>
				<Input
					label="Enter Your Username / Email"
					id="user"
					name="user"
					value={formik.values.user}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.user}
					touched={formik.touched.user}
				/>

				<Input
					label="Enter Your Password"
					id="password"
					name="password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.password}
					touched={formik.touched.password}
				/>

				<Button
					type="submit"
					px={5}
					py={2}
					rounded={"full"}
					fontSize={"md"}
					text={"sm"}
					alignSelf={"center"}
					letterSpacing={"wider"}
					textTransform={"uppercase"}
					colorScheme={"facebook"}
					isLoading={formik.isSubmitting}
				>
					Login
				</Button>
			</form>
		</div>
	);
};

export default LoginForm;
