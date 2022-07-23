import React from "react";
import axios from "axios";

import { Text } from "@chakra-ui/react";

import SideBarLayout from "../../components/UI/SideBarLayout";
import Header from "../../components/UI/Header";
import ProductList from "../../components/product/ProductList";

const ProductListPage = (props) => {
	return (
		<SideBarLayout>
			{/* <Header /> */}
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
				<ProductList products={props.products} />
			</div>
		</SideBarLayout>
	);
};

export async function getStaticProps() {
	const products = await axios.get("/api/products");
	return {
		props: {
			products: products.data,
		},
		revalidate: 1,
	};
}

export default ProductListPage;
