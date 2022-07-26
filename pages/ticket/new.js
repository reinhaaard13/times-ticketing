import React from "react";
import axios from "axios";

import SideBarLayout from "../../components/UI/SideBarLayout";
import TicketForm from "../../components/ticket/TicketForm";
import Header from "../../components/UI/Header";

const NewTicketPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
			<div className="px-4 w-full flex flex-col items-center">
				<h1 className="my-4 font-semibold text-lime-500 text-2xl">Create new ticket</h1>
				<TicketForm subjects={props.subjects} products={props.products} />
			</div>
		</SideBarLayout>
	);
};

export async function getStaticProps() {
	const subjectResponse = await axios.get("/api/subjects");
	const subjects = subjectResponse.data;

	const productsResponse = await axios.get("/api/products")
	const products = productsResponse.data
	
	return {
		props: {
			subjects: subjects.map((subject) => {
				return {
					id: subject.id,
					subject: subject.subject,
					severity: subject.severity,
				};
			}),
			products
		},
    revalidate: 1
	};
}

export default NewTicketPage;
