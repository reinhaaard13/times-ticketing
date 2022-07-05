import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";

import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Textarea,
	Button,
	Select,
	Option,
} from "@chakra-ui/react";

const validate = (values) => {
	const errors = {};

	if (!values.product_id) {
		errors.product_id = "Required";
	}

	if (!values.subproduct_name) {
		errors.subproduct_name = "Required";
	}

	if (!values.subproduct_desc) {
		errors.subproduct_desc = "Required";
	}

	return errors;
};

const NewSubProductForm = (props) => {
	const router = useRouter();

	// console.log(props);
	const formik = useFormik({
		initialValues: {
			product_id: "",
			subproduct_name: "",
			subproduct_desc: "",
		},
		validate,
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			console.log(values);
			const response = await axios.post(
				"http://localhost:3000/api/subproducts",
				values
			);
			console.log(response);

			if (response.status === 201) {
				formik.resetForm();
				router.push("/product");
			}

			formik.setSubmitting(false);
		},
	});
	return (
		<form
			className="w-full flex flex-col justify-center items-center"
			onSubmit={formik.handleSubmit}
		>
			<FormControl
				maxWidth={"md"}
				marginBottom={4}
				isInvalid={formik.errors.product_id && formik.touched.product_id}
			>
				<FormLabel htmlFor="product_id">Choose Product</FormLabel>
				<Select
					name="product_id"
					id="product_id"
					placeholder="Select Product"
					value={formik.values.product_id}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				>
					{props.products.map((product) => (
						<option key={product.product_id} value={product.product_id}>
							{product.product_name}
						</option>
					))}
				</Select>
				<FormErrorMessage>{formik.errors.product_id}</FormErrorMessage>
			</FormControl>

			<FormControl
				maxWidth={"md"}
				marginBottom={4}
				isInvalid={
					formik.errors.subproduct_name && formik.touched.subproduct_name
				}
			>
				<FormLabel htmlFor="subproduct_name">Subproduct Name</FormLabel>
				<Input
					id="subproduct_name"
					name="subproduct_name"
					placeholder="Subproduct Name"
					value={formik.values.subproduct_name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<FormErrorMessage>{formik.errors.subproduct_name}</FormErrorMessage>
			</FormControl>

			<FormControl
				maxWidth={"md"}
				isInvalid={
					formik.errors.subproduct_desc && formik.touched.subproduct_desc
				}
			>
				<FormLabel htmlFor="subproduct_desc">Subproduct Description</FormLabel>
				<Textarea
					id="subproduct_desc"
					name="subproduct_desc"
					placeholder="Subproduct Description"
					value={formik.values.subproduct_desc}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<FormErrorMessage>{formik.errors.subproduct_desc}</FormErrorMessage>
			</FormControl>

			<Button
				type="submit"
				isLoading={formik.isSubmitting}
				loadingText="Creating Product"
				colorScheme="teal"
				marginTop={4}
				disabled={!formik.isValid}
			>
				Create New Product
			</Button>
			<Button
				variant={"ghost"}
				onClick={() => {
					router.back();
				}}
				colorScheme="red"
				marginTop={4}
			>
				Cancel
			</Button>
		</form>
	);
};

export default NewSubProductForm;
