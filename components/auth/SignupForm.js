import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Link as ChakraLink, Button } from "@chakra-ui/react";

import Input from "../UI/Input";

const LoginSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	user: Yup.string()
		.required("Required")
		.min(8, "Must be at least 8 characters"),
	password: Yup.string()
		.required("Required")
		.min(8, "Must be at least 8 characters"),
	email: Yup.string().email("Invalid email address").required("Required"),
	phone: Yup.string()
		.matches(/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g, "Invalid phone number")
		.required("Required"),
});

const LoginForm = (props) => {
	const formik = useFormik({
		initialValues: {
			name: "",
			user: "",
			password: "",
			email: "",
			phone: "",
		},
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="flex flex-col w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Signup</h1>
			<form className="flex flex-col" onSubmit={formik.handleSubmit}>
				<Input
					label="Enter Full Name"
					id="name"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.name}
					touched={formik.touched.name}
				/>

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

				<Input
					label="Enter Your Email"
					id="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.email}
					touched={formik.touched.email}
				/>

				<Input
					label="Enter Your Phone Number"
					id="phone"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.phone}
					touched={formik.touched.phone}
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
				>
					Signup
				</Button>
			</form>
			<ChakraLink
				fontSize={"sm"}
				textColor={"GrayText"}
				alignSelf={"center"}
				marginTop={2}
				onClick={props.onChangeMode}
			>
				Already Have an Account? Login
			</ChakraLink>
		</div>
	);
};

export default LoginForm;
