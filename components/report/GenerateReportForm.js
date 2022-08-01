import React from 'react';
import axios from 'axios';

import {
  Text,
  Flex,
  Box,
  Button
} from "@chakra-ui/react"

const GenerateReportForm = () => {
  return (
    <Flex
			w={"full"}
			maxW={"lg"}
			p={"4"}
			bg={"white"}
			rounded={"2xl"}
			shadow={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
		>
      <Text mb={2}>Generate Report</Text>
      <a href={`${process.env.NEXT_PUBLIC_STORAGE_URI}/api/tickets/report?start=${encodeURIComponent(new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString())}&end=${encodeURIComponent(new Date().toISOString())}`} target="_blank" rel="noreferrer">
        <Button colorScheme={'teal'}>Generate Report</Button>
      </a>
    </Flex>
  );
}
 
export default GenerateReportForm;