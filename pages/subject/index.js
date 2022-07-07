import React, { useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import { useToast } from "@chakra-ui/react";

import Prompt from "../../components/UI/Prompt";
import Header from "../../components/UI/Header";
import SideBarLayout from "../../components/UI/SideBarLayout";
import SubjectList from "../../components/subjects/SubjectList";

const SubjectListPage = (props) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selected, setSelected] = useState(null);
	const [subjects, setSubjects] = useState(props?.subjects || null);
	const toast = useToast();

	const cancelRef = useRef();

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
		setSelected(null)
	};

	const confirmDeleteHandler = async () => {
		const response = await axios.delete(`/api/subjects/${selected}`);
		console.log(response);
		setIsOpenModal(false);
		if (response.status !== 200) {
			alert("Failed to delete subject");
		} else {
			setSubjects(subjects.filter((subject) => subject.id !== selected));
			toast({
				title: "Subject deleted",
				description: "Subject has been deleted successfully",
				status: "success",
				duration: 5000,
				isClosable: true,
			})
		}
		setSelected(null);
	};

	const deleteSubjectHandler = (id) => {
		setIsOpenModal(true);
		setSelected(id);
	};

	return (
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
			<div className="container px-1 text-slate-800 z-20 relative">
				<div className="flex flex-col md:flex-row justify-between mt-6 mb-4">
					<h1 className="font-semibold text-2xl text-lime-500">
						Subject Case
					</h1>
				</div>
				<SubjectList
					subjects={subjects}
					onDelete={deleteSubjectHandler}
				/>
			</div>
		</SideBarLayout>
	);
};

export async function getStaticProps() {
	const response = await axios.get("http://localhost:3000/api/subjects");

	const { subjects } = await response.data;

	return {
		props: {
			subjects,
		},
		revalidate: 60,
	};
}

export default SubjectListPage;