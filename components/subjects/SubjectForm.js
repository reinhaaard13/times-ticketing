import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";

import { Box, Select } from "@chakra-ui/react";

import Input from "../UI/Input";
import SeverityRadio from "./SeverityRadio";

const SubjectForm = (props) => {
	const router = useRouter();
	const [existingData, setExistingData] = useState({})
	const [subproducts, setSubproducts] = useState([])

	const csid = router.query.csid;

	const formik = useFormik({
		initialValues: {
			subject: existingData?.subject || "",
			severity: existingData?.severity || null,
			subproduct: existingData?.subproduct_id || null,
		},
		validate: (values) => {
			const errors = {};
			if (!values.subproduct) {
				errors.subproduct = "Required";
			}

			if (!values.subject) {
				errors.subject = "Required";
			}

			if (values.severity === null) {
				errors.severity = "Must pick 1 severity";
			}
			return errors;
		},
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			let response;
			if (existingData) {
				response = await axios.patch(`/api/subjects/${existingData.id}`, {
					subproduct_id: values.subproduct,
					subject: values.subject,
					severity: values.severity,
				});
			} else {
				response = await axios.post("/api/subjects/create", {
					subproduct_id: values.subproduct,
					subject: values.subject,
					severity: values.severity,
				});
			}
			// console.log(response.data);
			if (response.status === 200) {
				router.push("/subject");
			}
			formik.setSubmitting(false);
		},
	});

	useEffect(() => {
		const fetchProps = async () => {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/subjects/${csid}`
			);
			const caseSubject = await response.data;
	
			const responseSubproduct = await axios.get(
				`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/subproducts`
			);
			const subproducts = await responseSubproduct.data;
	
			setExistingData(caseSubject);
			formik.setFieldValue("subject", caseSubject.subject);
			formik.setFieldValue("severity", caseSubject.severity);
			formik.setFieldValue("subproduct", caseSubject.subproduct_id);
			setSubproducts(subproducts);
		}

		fetchProps();
	}, [csid, formik]);

	const changeSeverityHandler = (e) => {
		// console.log(e);
		formik.setValues((values) => ({ ...values, severity: e }));
		// setSelected(e);
	};

	return (
		<Box
			w={"full"}
			maxW={"lg"}
			p={4}
			rounded={"xl"}
			shadow={"lg"}
			bg={"whiteAlpha.900"}
			backdropFilter={"auto"}
			backdropBlur={"md"}
		>
			<form onSubmit={formik.handleSubmit} className="flex flex-col">
				<label
					htmlFor="subproduct"
					className="uppercase font-semibold text-slate-600 mb-2 text-sm"
				>
					Select Subproduct
				</label>
				<Select
					placeholder="Subproduct of New Case Subject"
					name="subproduct"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.subproduct}
					mb={3}
					id="subproduct"
				>
					{subproducts.map((subproduct) => (
						<option
							value={subproduct.subproduct_id}
							key={subproduct.subproduct_id}
						>
							{subproduct.subproduct_name} - {subproduct.Product.product_name}
						</option>
					))}
				</Select>

				<Input
					label="Subject Description"
					id="desc"
					name="subject"
					value={formik.values.subject}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.subject}
				/>

				<label
					htmlFor=""
					className="uppercase font-semibold text-slate-600 mb-2 text-sm"
				>
					Select Severity
				</label>
				<SeverityRadio
					selected={formik.values.severity}
					onChange={changeSeverityHandler}
				/>
				<button
					type="submit"
					disabled={!formik.isValid || formik.isSubmitting}
					className="px-4 py-2 font-semibold text-sm uppercase mt-4 hover:shadow-md hover:bg-lime-600 outline-lime-600 text-white w-fit self-center bg-lime-500 rounded-full disabled:bg-opacity-25 transition-all duration-300"
				>
					{existingData ? "Apply Changes" : "Create New Subject Case"}
				</button>
			</form>
		</Box>
	);
};

export default SubjectForm;
