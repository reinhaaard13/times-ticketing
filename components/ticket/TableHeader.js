import React from "react";

import { Flex, IconButton, Th, Icon } from "@chakra-ui/react";
import { TiArrowSortedUp, TiArrowUnsorted } from "react-icons/ti";

const TableHeader = ({ children, sortBy, sortOrder, onSort, column, width }) => {
	return (
		<Th
			onClick={() => onSort(column)}
			key={column}
      _hover={{backgroundColor: "gray.400"}}
      width={width && width}
      cursor={'pointer'}
      whiteSpace={'nowrap'}
		>
			{children}
			<Icon
				as={sortBy === column ? TiArrowSortedUp : TiArrowUnsorted}
				transform={
					sortOrder === "asc" && sortBy === column
						? "rotate(180deg)"
						: "rotate(0deg)"
				}
        marginLeft={1}
				textColor={sortBy !== column && "blackAlpha.500"}
			/>
		</Th>
	);
};

export default TableHeader;
