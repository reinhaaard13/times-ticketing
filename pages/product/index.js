import React from "react";
import Head from "next/head";
import axios from "axios";

import { Text } from "@chakra-ui/react";

import SideBarLayout from "../../components/UI/SideBarLayout";
import ProductList from "../../components/product/ProductList";

const ProductListPage = (props) => {
	return (
		<>
		<Head>
			<title>Products List</title>
		</Head>
		<SideBarLayout>
			<div className="container px-1">
				<Text
					fontSize={"2xl"}
					fontWeight={"semibold"}
					className="text-lime-500"
					marginTop={5}
					marginBottom={4}
				>
					Products List
				</Text>
				<ProductList />
			</div>
		</SideBarLayout>
		</>
	);
};

// export async function getStaticProps() {
// 	const products = await axios.get("/api/products");
// 	return {
// 		props: {
// 			products: products.data,
// 		},
// 		revalidate: 1,
// 	};
// }

export default ProductListPage;
