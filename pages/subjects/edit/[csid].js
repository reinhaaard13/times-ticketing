import React from "react";
import { useRouter } from "next/router";

import sequelize from "../../../lib/dbConnect";
import CaseSubject from "../../../models/CaseSubject";
import Header from "../../../components/UI/Header";
import SideBarLayout from "../../../components/UI/SideBarLayout";
import SubjectForm from "../../../components/subjects/SubjectForm";

const EditSubjectPage = (props) => {
	const router = useRouter();

	return (
		<SideBarLayout>
			<Header />
      <div className="container px-4 flex flex-col justify-center items-center">
        <p className="font-semibold mt-8 mb-4 text-lg text-slate-800">Edit Existing Subject Case</p>
        <SubjectForm existingData={props.caseSubject} />
      </div>
		</SideBarLayout>
	);
};

export async function getServerSideProps (context) {
	const csid = context.params.csid

	try {
		const caseSubject = await CaseSubject(sequelize);
		const result = await caseSubject.findOne({
			where: {
				id: csid
			}
		});
		return {
			props: {
				caseSubject:JSON.parse(JSON.stringify(result.dataValues))
			}
		}
	} catch (e) {
		// console.log(e);
		return {
			props: {
				caseSubject: null
			}
		}
	}
}

export default EditSubjectPage;
