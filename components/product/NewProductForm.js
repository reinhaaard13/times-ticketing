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
	Box,
} from "@chakra-ui/react";

const validate = (values) => {
	const errors = {};

	if (!values.product_name) {
		errors.product_name = "Required";
	}

	if (!values.product_desc) {
		errors.product_desc = "Required";
	}

	return errors;
};

const NewProductForm = (props) => {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			product_name: "",
			product_desc: "",
		},
		validate,
		onSubmit: async (values) => {
			formik.setSubmitting(true);

			const response = await axios.post("/api/products", values);

			// console.log(response);

			if (response.status === 201) {
				formik.resetForm();
				router.push("/product");
			}

			formik.setSubmitting(false);
		},
	});
	return (
		<Box
			w={"full"}
			maxW={"md"}
			p={"4"}
			bg={"white"}
			rounded={"2xl"}
			shadow={"lg"}
		>
			<form
				className="w-full flex flex-col justify-center items-center"
				onSubmit={formik.handleSubmit}
			>
				<FormControl
					maxWidth={"md"}
					marginBottom={4}
					isInvalid={formik.errors.product_name && formik.touched.product_name}
				>
					<FormLabel htmlFor="product_name">Product Name</FormLabel>
					<Input
						id="product_name"
						name="product_name"
						placeholder="Product Name"
						value={formik.values.product_name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<FormErrorMessage>{formik.errors.product_name}</FormErrorMessage>
				</FormControl>

				<FormControl
					maxWidth={"md"}
					isInvalid={formik.errors.product_desc && formik.touched.product_desc}
				>
					<FormLabel htmlFor="product_desc">Product Description</FormLabel>
					<Textarea
						id="product_desc"
						name="product_desc"
						placeholder="Product Description"
						value={formik.values.product_desc}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<FormErrorMessage>{formik.errors.product_desc}</FormErrorMessage>
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
		</Box>
	);
};

export default NewProductForm;
