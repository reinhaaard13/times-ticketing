import React, { useState, useRef } from "react";
import axios from "axios";
import Head from "next/head";
import { useToast } from "@chakra-ui/react";

import useSWR from "swr";

import Prompt from "../../components/UI/Prompt";
import SideBarLayout from "../../components/UI/SideBarLayout";
import SubjectList from "../../components/subjects/SubjectList";
import SubjectService from "../../services/subject.service";

const SubjectListPage = (props) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selected, setSelected] = useState(null);
	const toast = useToast();

	const { data, error, mutate } = useSWR(
		"/api/subjects",
		async (url) => await SubjectService.getAllSubjects()
	);

	const cancelRef = useRef();

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
		setSelected(null);
	};

	const confirmDeleteHandler = async () => {
		const response = await axios.delete(`/api/subjects/${selected}`);
		// console.log(response);
		setIsOpenModal(false);
		if (response.status !== 200) {
			alert("Failed to delete subject");
		} else {
			mutate()
			toast({
				title: "Subject deleted",
				description: "Subject has been deleted successfully",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		}
		setSelected(null);
	};

	const deleteSubjectHandler = (id) => {
		setIsOpenModal(true);
		setSelected(id);
	};

	return (
		<>
			<Head>
				<title>All Subjects</title>
			</Head>
			<SideBarLayout>
				<Prompt
					show={isOpenModal}
					onClose={closeModal}
					onConfirm={confirmDeleteHandler}
					title="Are you sure want to delete this subject case?"
					description="This action cannot be undone."
					primaryAction="Delete"
					secondaryAction="Cancel"
					cancelRef={cancelRef}
				/>

				{/* <Header /> */}
				<div className="container px-1 text-slate-800 relative">
					<div className="flex flex-col md:flex-row justify-between mt-6 mb-4">
						<h1 className="font-semibold text-2xl text-lime-500">
							Case Subject
						</h1>
					</div>
					<SubjectList
						subjects={data}
						onDelete={deleteSubjectHandler}
					/>
				</div>
			</SideBarLayout>
		</>
	);
};

// export async function getStaticProps() {
// 	const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/subjects`);

// 	const subjects = await response.data;

// 	return {
// 		props: {
// 			subjects,
// 		},
// 		revalidate: 60,
// 	};
// }

export default SubjectListPage;
