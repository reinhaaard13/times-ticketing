import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'

import {
	Flex,
	Button,
	Select,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";

import Input from "../UI/Input";

const RegisterUserSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	username: Yup.string()
		.required("Required")
		.min(8, "Must be at least 8 characters"),
	password: Yup.string()
		.required("Required")
		.min(8, "Must be at least 8 characters"),
	email: Yup.string().email("Invalid email address").required("Required"),
	phone: Yup.string()
		.matches(/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g, "Invalid phone number")
		.required("Required"),
	role: Yup.string().required("Required"),
});

const RegisterUserForm = (props) => {

	const formik = useFormik({
		initialValues: {
			name: "",
			username: "",
			password: "",
			email: "",
			phone: "",
			role: "",
		},
		validationSchema: RegisterUserSchema,
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			try {
				const response = await axios.post(
					"/api/users/register",
					values
				)
				formik.resetForm();
			} catch (e) {
				console.log(e);
			}
			formik.setSubmitting(false);
		},
	});

	return (
		<React.Fragment>
			<h1 className="text-2xl font-bold mb-4">Register new user</h1>
			<form
				className="flex flex-col md:grid md:grid-cols-2 gap-4"
				onSubmit={formik.handleSubmit}
			>
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
					label="Enter Username"
					id="username"
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.username}
					touched={formik.touched.username}
				/>

				<Input
					label="Enter Password"
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
					label="Enter Email"
					id="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.email}
					touched={formik.touched.email}
				/>

				<Input
					label="Enter Phone Number"
					id="phone"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.phone}
					touched={formik.touched.phone}
				/>

				<FormControl isInvalid={formik.errors.role && formik.touched.role}>
					<FormLabel
						htmlFor="role"
						fontWeight={"semibold"}
						fontSize={"sm"}
						mb={2}
						textTransform={"uppercase"}
						textColor={"gray.600"}
					>
						Pick Role
					</FormLabel>
					<Select
						id="role"
						placeholder="Pick role for user"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.role}
						name="role"
					>
						{props.roles.map((role) => (
							<option key={role.role_id} value={role.role_id}>
								{role.role_name}
							</option>
						))}
					</Select>
					<FormErrorMessage>{formik.errors.role}</FormErrorMessage>
				</FormControl>

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
					gridColumnEnd={"span 2"}
					isLoading={formik.isSubmitting}
				>
					REGISTER
				</Button>
			</form>
		</React.Fragment>
	);
};

export default RegisterUserForm;
