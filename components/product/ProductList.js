import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Badge,
	Button,
} from "@chakra-ui/react";
import ProductService from "../../services/product.service";

const ProductList = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const products = await ProductService.getAllProducts();

			setProducts(products);
		}
		fetchProducts();
	}, [])

	return (
		<TableContainer
			shadow={"lg"}
			className="border border-slate-500/20 rounded-xl w-full"
		>
			<Table
				bg={"whiteAlpha.900"}
				backdropFilter={"auto"}
				backdropBlur={"md"}
				variant="simple"
				size="sm"
			>
				<Thead className="bg-slate-500/20">
					<Tr>
						<Th width="2">No.</Th>
						<Th>Product Name</Th>
						<Th>Sub products</Th>
					</Tr>
				</Thead>
				<Tbody>
					{products.map((product, idx) => (
						<Tr key={idx}>
							<Td className="uppercase">{idx + 1}</Td>
							<Td>
								{product.product_name}
								<span className="block text-xs text-slate-800/80">
									{product.product_desc}
								</span>
							</Td>
							<Td>
								{product.Subproducts.map((subproduct, idx) => (
									<Badge key={idx} marginRight={1} colorScheme="green">
										{subproduct.subproduct_name}
									</Badge>
								))}
							</Td>
						</Tr>
					))}
					<Tr>
						<Td></Td>
						<Td>
							<Link href={"/product/new"}>
								<Button size={"sm"} leftIcon={<FiPlus />}>
									Add New Product
								</Button>
							</Link>
						</Td>
						<Td>
							<Link href={"/product/sub/new"}>
								<Button size={"sm"} leftIcon={<FiPlus />}>
									Add New Sub Product
								</Button>
							</Link>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ProductList;
