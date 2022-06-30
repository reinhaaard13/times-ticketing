import React from "react";
import { useRouter } from "next/router";

import Header from "../../../components/UI/Header";
import SideBarLayout from "../../../components/UI/SideBarLayout";
import SubjectForm from "../../../components/subjects/SubjectForm";

const EditSubjectPage = (props) => {
	const router = useRouter();
	const { csid } = router.query;

	return (
		<SideBarLayout>
			<Header />
      <div className="container px-4 flex flex-col justify-center items-center">
        <p className="font-semibold mt-8 mb-4 text-lg text-slate-800">Edit Existing Subject Case</p>
        <SubjectForm existingData={null} />
      </div>
		</SideBarLayout>
	);
};

export async function getServerSideProps (context) {
	const csid = context.params.csid

	
}

export default EditSubjectPage;
