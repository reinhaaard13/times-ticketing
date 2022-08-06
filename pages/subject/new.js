import React from "react";
import axios from "axios";

import SideBarLayout from "../../components/UI/SideBarLayout";
import Header from "../../components/UI/Header";
import SubjectForm from "../../components/subjects/SubjectForm";

const NewSubjectPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
			<div className="container px-4 flex flex-col justify-center items-center">
        <p className="font-semibold mt-8 mb-4 text-xl text-lime-500">Create A New Subject Case</p>
        <SubjectForm subproducts={props.subproducts} />
      </div>
		</SideBarLayout>
	);
};

export async function getStaticProps() {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/subproducts`)

	const subproducts = await response.data

	return {
		props: {
			subproducts,
		},
		revalidate: 60,
	}
}

export default NewSubjectPage;
