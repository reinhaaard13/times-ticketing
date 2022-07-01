import React, { useState } from "react";
import { useFormik } from "formik";
import axios from 'axios';
import { useRouter } from "next/router";

import SeverityRadio from "./SeverityRadio";

const SubjectForm = (props) => {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			subject: props.existingData?.subject || "",
			severity: props.existingData?.severity || null,
		},
		validate: (values) => {
			const errors = {};
			if (!values.subject) {
				errors.subject = "Required";
			}

			if (values.severity === null) {
				errors.severity = "Must pick 1 severity";
			}
			return errors;
		},
		onSubmit: async (values) => {
			formik.setSubmitting(true)
			let response;
			if (props.existingData) {
				response = await axios.patch(`/api/subjects/${props.existingData.id}`, {
					subject: values.subject,
					severity: values.severity,
				});
			} else {
				response = await axios.post("/api/subjects/add", {
					subject: values.subject,
					severity: values.severity,
				});
			}
			console.log(response.data);
			if (response.status === 200) {
				router.push("/subjects");
			}
			formik.setSubmitting(false)
		},
	});

	const changeSeverityHandler = (e) => {
		// console.log(e);
		formik.setValues((values) => ({ ...values, severity: e }));
		// setSelected(e);
	};

	return (
		<div className="w-full sm:w-3/4 md:w-1/2">
			<form onSubmit={formik.handleSubmit} className="flex flex-col">
				<label
					htmlFor="desc"
					className="uppercase font-semibold text-slate-500 mb-2 text-sm"
				>
					Subject Description
				</label>
				<div className="flex flex-col mb-4">
					<input
						type="text"
						id="desc"
						name="subject"
						value={formik.values.subject}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="bg-slate-300 text-slate-800 p-3 rounded-md focus:outline-slate-500"
					/>
					{formik.errors.subject && (
						<p className="text-red-500 text-sm ">{formik.errors.subject}</p>
					)}
				</div>

				<label
					htmlFor=""
					className="uppercase font-semibold text-slate-500 mb-2 text-sm"
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
					{props.existingData ? "Apply Changes" : "Create New Subject Case"}	
				</button>
			</form>
		</div>
	);
};

export default SubjectForm;
