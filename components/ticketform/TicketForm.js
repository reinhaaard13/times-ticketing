import React, { useMemo } from "react";
import { useFormik } from "formik";

import {
	Box,
	Flex,
	Text,
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Select,
	Textarea,
	Button,
	Divider,
} from "@chakra-ui/react";

import FileUpload from "../form/FileUpload";
import axios from "axios";

const DUMMY_PRODUCTS = [
	{ id: 2, name: "Product 2" },
	{ id: 3, name: "Product 3" },
	{ id: 1, name: "Product 1" },
];

const DUMMY_SUBPRODUCTS = [
	{ id: 1, name: "Subproduct 1", productId: 1 },
	{ id: 2, name: "Subproduct 2", productId: 1 },
	{ id: 3, name: "Subproduct 3", productId: 2 },
	{ id: 4, name: "Subproduct 4", productId: 2 },
	{ id: 5, name: "Subproduct 5", productId: 3 },
	{ id: 6, name: "Subproduct 6", productId: 3 },
];

const DUMMY_DEPARTMENTS = ["IT", "BA", "MKT", "OPR"];

const validateForm = (values) => {
	const errors = {};

	if (!values.location) {
		errors.location = "Location is required";
	}

	if (!values.cust_name) {
		errors.cust_name = "Customer name is required";
	}

	if (!values.cust_no) {
		errors.cust_no = "Customer number is required";
	}

	if (!values.cust_email) {
		errors.cust_email = "Customer email is required";
	}

	if (!values.product) {
		errors.product = "Product is required";
	}

	if (!values.subproduct) {
		errors.subproduct = "Subproduct is required";
	}

	if (!values.assigned_to) {
		errors.assigned_to = "Choose who you assign this ticket to";
	}

	if (!values.department) {
		errors.department = "Choose a department you assign this ticket to";
	}

	if (!values.casesubject) {
		errors.casesubject = "Pick a subject for this ticket";
	}

	if (!values.description) {
		errors.description = "Describe the issue";
	}

	// console.log(errors);

	return errors;
};

const TicketForm = (props) => {
	const formik = useFormik({
		initialValues: {
			location: "",
			cust_name: "",
			cust_no: "",
			cust_email: "",
			product: "",
			subproduct: "",
			assigned_to: "",
			department: "",
			casesubject: "",
			description: "",
			attachment: "",
		},
		// validateOnChange: false,
		validate: validateForm,
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			const formData = new FormData();
			formData.append("location", values.location);
			formData.append("cust_name", values.cust_name);
			formData.append("cust_no", values.cust_no);
			formData.append("cust_email", values.cust_email);
			formData.append("product", values.product);
			formData.append("subproduct", values.subproduct);
			formData.append("assigned_to", values.assigned_to);
			formData.append("department", values.department);
			formData.append("casesubject", values.casesubject);
			formData.append("description", values.description);
			formData.append("attachment", values.attachment);
			formData.append("created_by", "admin");

			try {
				const response = await axios.post("/api/tickets", formData);
				console.log(response);
			} catch (e) {
				console.log(e);
			}
			formik.setSubmitting(false);
		},
	});

	const pickImageHandler = (e) => {
		console.log(e.target.files);
		const file = e.target.files[0];
		if (file?.size > 10000000) {
			formik.setErrors({ attachment: "Attachment size is too large" });
		} else if(!file) {
			formik.setFieldValue("attachment", null)
		} else {
			formik.setFieldValue("attachment", file);
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Flex flexDirection="column" width={"full"}>
				<FormControl
					maxW={"lg"}
					padding={2}
					isRequired
					isInvalid={formik.errors.location && formik.touched.location}
				>
					<FormLabel htmlFor="location">Event Location</FormLabel>
					<Input
						id="location"
						type="text"
						name="location"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.location}
					/>
					<FormErrorMessage>{formik.errors.location}</FormErrorMessage>
				</FormControl>

				<Flex flexDir={["column", "row"]}>
					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.cust_name && formik.touched.cust_name}
					>
						<FormLabel htmlFor="cust_name">Customer Name</FormLabel>
						<Input
							id="cust_name"
							type="text"
							name="cust_name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.cust_name}
						/>
						<FormErrorMessage>{formik.errors.cust_name}</FormErrorMessage>
					</FormControl>

					<FormControl padding={2} isRequired isInvalid={formik.errors.cust_no && formik.touched.cust_no}>
						<FormLabel htmlFor="cust_no">Customer Phone</FormLabel>
						<Input
							id="cust_no"
							type="text"
							name="cust_no"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.cust_no}
						/>
						<FormErrorMessage>{formik.errors.cust_no}</FormErrorMessage>
					</FormControl>

					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.cust_email && formik.touched.cust_email}
					>
						<FormLabel htmlFor="cust_email">Customer Email</FormLabel>
						<Input
							id="cust_email"
							type="email"
							name="cust_email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.cust_email}
						/>
						<FormErrorMessage>{formik.errors.cust_email}</FormErrorMessage>
					</FormControl>
				</Flex>

				<Flex flexDir={["column", "row"]}>
					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.assigned_to && formik.touched.assigned_to}
					>
						<FormLabel htmlFor="assigned_to">Assign To</FormLabel>
						<Select
							id="assigned_to"
							name="assigned_to"
							placeholder="Select Asignee"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.assigned_to}
						>
							{/* <option value="" disabled selected>Select Asignee</option> */}
							{DUMMY_DEPARTMENTS.map((department, idx) => (
								<option key={idx} value={department}>
									{department}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.assigned_to}</FormErrorMessage>
					</FormControl>

					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.department && formik.touched.department}
					>
						<FormLabel htmlFor="department">
							Assign To Unit Department
						</FormLabel>
						<Select
							id="department"
							name="department"
							placeholder="Select A Unit Department"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.department}
						>
							{/* <option value="" disabled selected>Select Asignee Unit Department</option> */}
							{DUMMY_DEPARTMENTS.map((department, idx) => (
								<option key={idx} value={department}>
									{department}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.department}</FormErrorMessage>
					</FormControl>
				</Flex>

				<Flex flexDir={["column", "row"]}>
					<FormControl padding={2} isRequired isInvalid={formik.errors.product && formik.touched.product}>
						<FormLabel htmlFor="product">Choose Product</FormLabel>
						<Select
							id="product"
							name="product"
							placeholder="Select Product"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.product}
						>
							{/* <option value="" disabled selected>Select product</option> */}
							{DUMMY_PRODUCTS.map((product, idx) => (
								<option key={idx} value={product.id}>
									{product.name}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.product}</FormErrorMessage>
					</FormControl>

					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.subproduct && formik.touched.subproduct}
					>
						<FormLabel htmlFor="subproduct">Choose Sub Product</FormLabel>
						<Select
							id="subproduct"
							name="subproduct"
							placeholder="Select Sub Product"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.subproduct}
						>
							{/* <option value="" disabled selected>Select Sub product</option> */}
							{DUMMY_SUBPRODUCTS.map((product, idx) => (
								<option key={idx} value={product.id}>
									{product.name}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.subproduct}</FormErrorMessage>
					</FormControl>

					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.casesubject && formik.touched.casesubject}
					>
						<FormLabel htmlFor="casesubject">Choose Case Subject</FormLabel>
						<Select
							id="casesubject"
							name="casesubject"
							placeholder="Select Case Subject"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.casesubject}
						>
							{/* <option value="" disabled selected>Select Case Subject</option> */}
							{props.subjects.map((subject, idx) => (
								<option key={idx} value={subject.id}>
									{subject.subject}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.casesubject}</FormErrorMessage>
					</FormControl>
				</Flex>

				<FormControl
					padding={2}
					isRequired
					isInvalid={formik.errors.description && formik.touched.description}
				>
					<FormLabel htmlFor="description">Description</FormLabel>
					<Textarea
						id="description"
						name="description"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.description}
					/>
					<FormErrorMessage>{formik.errors.description}</FormErrorMessage>
				</FormControl>

				<FormControl padding={2} isInvalid={formik.errors.attachment}>
					<FormLabel htmlFor="attachment">Attachment</FormLabel>
					<FileUpload
						onPickedImage={pickImageHandler}
						name="attachment"
						id="attachment"
						value={formik.values.attachment}
					/>
					<FormErrorMessage>{formik.errors.attachment}</FormErrorMessage>
				</FormControl>
			</Flex>

			<Divider margin={2} />

			<Button
				isLoading={formik.isSubmitting}
				loadingText="Creating Ticket"
				margin={2}
				colorScheme="teal"
				type="submit"
			>
				Create Ticket
			</Button>
		</form>
	);
};

export default TicketForm;
