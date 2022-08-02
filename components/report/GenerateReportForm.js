import React, { useState } from "react";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import moment from "moment";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { Text, Flex, Box, Button } from "@chakra-ui/react";

const GenerateReportForm = () => {
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const generateHandler = () => {
		const start = moment(state[0].startDate).toISOString();
		const end = moment(state[0].endDate).toISOString();

		window.open(
			`${process.env.NEXT_PUBLIC_STORAGE_URI}/api/tickets/report?start=${start}&end=${end}`,
			"_blank"
		);
	};

	return (
		<Flex
			w={"fit-content"}
			p={"4"}
			bg={"white"}
			rounded={"2xl"}
			shadow={"lg"}
			justifyContent={"center"}
			// alignItems={"center"}
			flexDirection={"column"}
		>
			<Text mb={2} fontSize={"xl"} fontWeight={"semibold"}>
				Generate Report
			</Text>
			<Text alignSelf={"center"} mb={2}>
				Pick start and end date for the report to be issued:
			</Text>
			<DateRangePicker
				onChange={(item) => setState([item.selection])}
				ranges={state}
				months={1}
				showSelectionPreview={true}
				className="border shadow-lg rounded-lg overflow-clip mb-4"
				weekStartsOn={1}
				rangeColors={["#319795"]}
			/>

			<Button colorScheme={"teal"} onClick={generateHandler}>
				Generate Report
			</Button>
		</Flex>
	);
};

export default GenerateReportForm;
