import React from "react";

import { Text, Th, Select } from "@chakra-ui/react";

const TableHead = ({options, ...props}) => {
	return (
		<Th {...props} >
			<Text>{props.children}</Text>
			<Select size={"xs"} placeholder={"-"}>
				{options?.map((item) => (
					<option key={item.product_id}>{item.product_name}</option>
				))}
			</Select>
		</Th>
	);
};

export default TableHead;
