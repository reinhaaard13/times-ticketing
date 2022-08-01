import React from "react";

import { Flex, Text, Divider, Icon } from "@chakra-ui/react";
import { MdDoneAll } from "react-icons/md";

const ClosedTicketSolution = ({solution, pic}) => {
	return (
		<Flex
			borderColor={"green.500"}
			borderWidth={2}
			p={2}
			rounded={"lg"}
			direction={"column"}
			bgColor={"green.100"}
			mb={4}
		>
			<Text fontWeight={"semibold"} fontSize={"large"} textColor={"green.500"} mb={2}>
        <Icon as={MdDoneAll} fontSize={'2xl'} mr={2} />
				This Ticket Has Been Closed
			</Text>
			<Divider mb={3} />
			{solution && (
				<>
					<Text fontSize={"sm"}>Solution: </Text>
					<Text mb={2}>{solution}</Text>
				</>
			)}
			<Text fontSize={'sm'} textColor={'green.500'}>Handled by: {pic}</Text>
		</Flex>
	);
};

export default ClosedTicketSolution;
