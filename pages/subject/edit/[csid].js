import React from "react";
import { useRouter } from "next/router";

import Header from "../../../components/UI/Header";
import SideBarLayout from "../../../components/UI/SideBarLayout";
import SubjectForm from "../../../components/subjects/SubjectForm";
import axios from "axios";

const EditSubjectPage = (props) => {
	// const router = useRouter();

	return (
		<SideBarLayout>
			{/* <Header /> */}
			<div className="container px-4 flex flex-col justify-center items-center">
				<p className="font-semibold mt-8 mb-4 text-xl text-lime-500">
					Edit Existing Subject Case
				</p>
				<SubjectForm
					existingData={props.caseSubject}
					subproducts={props.subproducts}
				/>
			</div>
		</SideBarLayout>
	);
};

export async function getServerSideProps(context) {
	const csid = context.params.csid;
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/subjects/${csid}`
		);
		const caseSubject = await response.data;

		const responseSubproduct = await axios.get(
			`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/subproducts`
		);
		const subproducts = await responseSubproduct.data;

		return {
			props: {
				caseSubject,
				subproducts,
			},
		};
	} catch (err) {
		return {
			redirect: {
				destination: "/subjects",
			},
		};
	}
}

export default EditSubjectPage;
