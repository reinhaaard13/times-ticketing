import React from "react";

import { Container, Box, Heading, Flex } from "@chakra-ui/react";

import SideBarLayout from "../../components/UI/SideBarLayout";
import GenerateReportForm from "../../components/report/GenerateReportForm";

const ReportPage = (props) => {
	return (
		<SideBarLayout>
			<Flex
				flexDir={"column"}
				className="container"
				p={2}
				alignItems={"center"}
			>
				<Heading
					size={"md"}
					marginTop={4}
					marginBottom={4}
					className="text-lime-500"
					fontWeight={"semibold"}
				>
					Issue A Report
				</Heading>
				<GenerateReportForm />
			</Flex>
		</SideBarLayout>
	);
};

export default ReportPage;
