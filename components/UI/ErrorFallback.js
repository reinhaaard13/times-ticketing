import React from "react";

import { Flex, Text } from "@chakra-ui/react";

const ErrorFallback = (props) => {
	return (
		<Flex
			bgColor={"whiteAlpha.900"}
			p={4}
			rounded={"lg"}
			height={"sm"}
			backdropFilter={"auto"}
			backdropBlur={"md"}
			shadow={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
		>
      <Text fontWeight={'semibold'} fontSize={'2xl'}>
        {props.error.status}
      </Text>
      <Text>
			  {props.error.error}
      </Text>
		</Flex>
	);
};

export default ErrorFallback;
