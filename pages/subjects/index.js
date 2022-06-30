import React from "react";
import axios from 'axios'
import Link from "next/link";
import { HiPlus } from "react-icons/hi";

import Header from "../../components/UI/Header";
import SideBarLayout from "../../components/UI/SideBarLayout";
import SubjectList from "../../components/subjects/SubjectList";

const SubjectListPage = (props) => {
	return (
		<SideBarLayout>
			<Header />
			<div className="container px-4 text-slate-800">
				<div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-8">
					<h1 className="font-bold text-2xl mb-2 md:mb-0 text-lime-500">
						Subject Case
					</h1>
					<Link href="/subjects/new">
						<button className="flex items-center gap-1 font-medium text-sm hover:shadow-md hover:bg-lime-500 hover:text-white transition-all duration-200 uppercase px-3 py-1 md:px-4 md:py-2 rounded-full outline-lime-500 outline outline-1 text-lime-500">
							<HiPlus />
							<span>Add new subject case </span>
						</button>
					</Link>
				</div>
				<SubjectList subjects={props.subjects} />
			</div>
		</SideBarLayout>
	);
};

export async function getStaticProps() {
	const response = await axios.get("http://localhost:3000/api/subjects");

	const {subjects} = response.data;

	return {
		props: {
			subjects,
		},
		revalidate: 60,
	};
}

export default SubjectListPage;
