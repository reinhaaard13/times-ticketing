import React from "react";

import { Stack, Text, Box } from "@chakra-ui/react";

const DashboardWidgets = (props) => {
	return (
		<Stack spacing={4} direction={"row"} marginTop={2}>
			<Box
				maxW={"xs"}
				borderWidth={"1px"}
				borderRadius={"lg"}
        shadow={'lg'}
				bg={"white"}
				p={3}
			>
				<Text>Tickets</Text>
			</Box>
		</Stack>
	);
};

export default DashboardWidgets;
