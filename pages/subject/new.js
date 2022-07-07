import React from "react";

import SideBarLayout from "../../components/UI/SideBarLayout";
import Header from "../../components/UI/Header";
import SubjectForm from "../../components/subjects/SubjectForm";

const NewSubjectPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
			<div className="container px-4 flex flex-col justify-center items-center">
        <p className="font-semibold mt-8 mb-4 text-xl text-lime-500">Create A New Subject Case</p>
        <SubjectForm />
      </div>
		</SideBarLayout>
	);
};

export default NewSubjectPage;
