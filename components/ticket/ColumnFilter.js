import React from "react";

import { Text, Th, Select } from "@chakra-ui/react";

const TableHead = ({ options, ...props }) => {
	return (
		<Th {...props}>
			<Text>{props.children}</Text>
			<Select
				size={"xs"}
				placeholder={"-"}
				onChange={props.onChange}
				name={props.name}
			>
				{options?.map((item) => (
					<option key={item.option_value} value={item.option_value}>
						{item.option_name}
					</option>
				))}
			</Select>
		</Th>
	);
};

export default TableHead;
