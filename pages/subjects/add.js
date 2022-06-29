import React from "react";

import Header from "../../components/UI/Header";
import SideBarLayout from "../../components/UI/SideBarLayout";
import SubjectList from "../../components/subjects/SubjectList";

const AddSubjectPage = (props) => {
	return (
		<SideBarLayout>
			<Header />
			<div className="container">
				<h1 className="mt-4 mb-4 font-bold text-2xl text-lime-500">
					Subject Case
				</h1>
				<SubjectList />
			</div>
		</SideBarLayout>
	);
};

export default AddSubjectPage;
