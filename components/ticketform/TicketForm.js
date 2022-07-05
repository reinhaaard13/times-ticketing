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
	Divider
} from "@chakra-ui/react";

import FileUpload from "../form/FileUpload";
import axios from "axios";

const DUMMY_PROJECTS = [
	{ id: 1, name: "Project 1" },
	{ id: 2, name: "Project 2" },
	{ id: 3, name: "Project 3" },
];

const DUMMY_SUBPROJECTS = [
	{ id: 1, name: "Subproject 1", projectId: 1 },
	{ id: 2, name: "Subproject 2", projectId: 1 },
	{ id: 3, name: "Subproject 3", projectId: 2 },
	{ id: 4, name: "Subproject 4", projectId: 2 },
	{ id: 5, name: "Subproject 5", projectId: 3 },
	{ id: 6, name: "Subproject 6", projectId: 3 },
];

const DUMMY_DEPARTMENTS = ["IT", "BA", "MKT", "OPR"];

const DUMMY_CASESUBJECT = [
	{
		id: 1,
		subject: "Settlement Failed Debit",
		severity: "MEDIUM",
	},
	{
		id: 2,
		subject: "Settlement Failed Flazz",
		severity: "HIGH",
	},
];

const validateForm = (values) => {
	const errors = {};

	if (!values.location) {
		errors.location = "Location is required";
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
			project: "",
			subproject: "",
			assigned_to: "",
			department: "",
			casesubject: "",
			description: "",
			attachment: "",
		},
		// validateOnChange: false,
		validate: validateForm,
		onSubmit: async (values) => {
			const formData = new FormData();
			formData.append("location", values.location);
			formData.append("cust_name", values.cust_name);
			formData.append("cust_no", values.cust_no);
			formData.append("cust_email", values.cust_email);
			formData.append("project", values.project);
			formData.append("subproject", values.subproject);
			formData.append("assigned_to", values.assigned_to);
			formData.append("department", values.department);
			formData.append("casesubject", values.casesubject);
			formData.append("description", values.description);
			formData.append("attachment", values.attachment);
			formData.append("created_by", "admin");

			try {
				const response = await axios.post('/api/tickets', formData);
				console.log(response);
			} catch (e) {
				console.log(e);
			}
		},
	});

	const pickImageHandler = (e) => {
		console.log(e.target.files);
		if (e.target.files.length < 1) {
			formik.setErrors({ attachment: "Please select an image" });
			return;
		}
		const file = e.target.files[0];
		if (file.size > 10000000) {
			formik.setErrors({ attachment: "Attachment size is too large" });
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
					isInvalid={formik.errors.location}
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
						isInvalid={formik.errors.cust_name}
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

					<FormControl padding={2} isRequired isInvalid={formik.errors.cust_no}>
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
						isInvalid={formik.errors.cust_email}
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
						isInvalid={formik.errors.assigned_to}
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
						isInvalid={formik.errors.department}
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
					<FormControl padding={2} isRequired isInvalid={formik.errors.project}>
						<FormLabel htmlFor="project">Choose Project</FormLabel>
						<Select
							id="project"
							name="project"
							placeholder="Select Project"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.project}
						>
							{/* <option value="" disabled selected>Select Project</option> */}
							{DUMMY_PROJECTS.map((project, idx) => (
								<option key={idx} value={project.id}>
									{project.name}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.project}</FormErrorMessage>
					</FormControl>

					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.subproject}
					>
						<FormLabel htmlFor="subproject">Choose Sub Project</FormLabel>
						<Select
							id="subproject"
							name="subproject"
							placeholder="Select Sub Project"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.subproject}
						>
							{/* <option value="" disabled selected>Select Sub Project</option> */}
							{DUMMY_SUBPROJECTS.map((project, idx) => (
								<option key={idx} value={project.id}>
									{project.name}
								</option>
							))}
						</Select>
						<FormErrorMessage>{formik.errors.subproject}</FormErrorMessage>
					</FormControl>

					<FormControl
						padding={2}
						isRequired
						isInvalid={formik.errors.casesubject}
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
					isInvalid={formik.errors.description}
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
			
			<Button margin={2} colorScheme='teal' type="submit">Create Ticket</Button>
		</form>
	);
};

export default TicketForm;
