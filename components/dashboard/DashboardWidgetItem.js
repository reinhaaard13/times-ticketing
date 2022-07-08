import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

const DashboardWidgetItem = ({ title, amount, icon, accentColor }) => {
	return (
		<Box
			// flexGrow={1}
			borderWidth={"1px"}
			borderRadius={"lg"}
			shadow={"lg"}
      className="bg-white/90 hover:bg-white hover:scale-105 transition-all duration-200"
			backdropFilter={"auto"}
			backdropBlur={"base"}
			p={3}
		>
			<Flex justifyContent={"space-between"}>
				<Text
					textTransform={"uppercase"}
					fontSize={"xs"}
					fontWeight={"semibold"}
					color={"gray.500"}
					letterSpacing={"wide"}
				>
					{title}
				</Text>
				{/* <Spacer/> */}
				<Box p={2} rounded={"lg"} bg={accentColor} textColor={"white"}>
					{icon}
				</Box>
			</Flex>
			<Text
				textTransform={"uppercase"}
				fontSize={"2xl"}
				fontWeight={"semibold"}
				letterSpacing={"wide"}
			>
				{amount}
			</Text>
		</Box>
	);
};

export default DashboardWidgetItem;
