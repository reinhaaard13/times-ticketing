import React from "react";
import axios from "axios";

import SideBarLayout from "../../components/UI/SideBarLayout";
import TicketForm from "../../components/ticketform/TicketForm";
import Header from "../../components/UI/Header";

const NewTicketPage = (props) => {
	return (
		<SideBarLayout>
			<Header />
			<div className="px-4 w-full flex flex-col items-center">
				<h1 className="my-4 font-bold text-xl">Create new ticket</h1>
				<TicketForm subjects={props.subjects} />
			</div>
		</SideBarLayout>
	);
};

export async function getStaticProps() {
	const response = await axios.get("http://localhost:3000/api/subjects");
	const { subjects } = response.data;

	return {
		props: {
			subjects: subjects.map((subject) => {
				return {
					id: subject.id,
					subject: subject.subject,
					severity: subject.severity,
				};
			}),
		},
    revalidate: 1
	};
}

export default NewTicketPage;
