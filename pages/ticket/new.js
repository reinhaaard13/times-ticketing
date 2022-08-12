import React from "react";
import Head from "next/head";
import axios from "axios";

import SideBarLayout from "../../components/UI/SideBarLayout";
import TicketForm from "../../components/ticket/TicketForm";

const NewTicketPage = (props) => {
	return (
		<>
		<Head>
			<title>Create New Ticket</title>
		</Head>
		<SideBarLayout>
			{/* <Header /> */}
			<div className="px-4 w-full flex flex-col items-center">
				<h1 className="my-4 font-semibold text-lime-500 text-2xl">Create new ticket</h1>
				<TicketForm products={props.products} />
			</div>
		</SideBarLayout>
		</>
	);
};

export async function getStaticProps() {
	const productsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/products`)
	const products = productsResponse.data
	
	return {
		props: {
			products
		},
    revalidate: 1
	};
}

export default NewTicketPage;
