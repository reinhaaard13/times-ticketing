import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import {
	Flex,
	Box,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Portal,
	Select,
	Grid,
	Button,
} from "@chakra-ui/react";

const TicketFilter = ({ setFilters }) => {
	const [filterParam, setFilterParam] = useState();

	useEffect(() => {
		axios.get("/api/tickets/filters").then((res) => setFilterParam(res.data));
	}, []);

	const handleFilter = (e) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<Accordion allowToggle>
			<AccordionItem mb={2}>
				<AccordionButton>
					Choose Report Filter
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel>
					<Flex
						flexDirection="column"
						p={4}
						bgColor={"white"}
						rounded={"lg"}
						shadow={"lg"}
					>
						<Text fontWeight={"semibold"} fontSize={"lg"} mb={2}>
							Select filters
						</Text>
						<form>
							<Grid templateColumns={["", "repeat(2, 1fr)"]} gap={2}>
								<Select
									placeholder="- Filter Product -"
									name="product"
									onChange={handleFilter}
								>
									{filterParam?.products?.map((item) => (
										<option key={item.option_value} value={item.option_value}>
											{item.option_name}
										</option>
									))}
								</Select>
								<Select
									placeholder="- Filter Status -"
									name="status"
									onChange={handleFilter}
								>
									<option value="OPEN">Open</option>
									<option value="PROGRESS">Progress</option>
									<option value="CLOSED">Closed</option>
								</Select>
								<Select
									placeholder="- Filter Case Subject -"
									name="subject"
									onChange={handleFilter}
								>
									{filterParam?.casesubjects?.map((item) => (
										<option key={item.option_value} value={item.option_value}>
											{item.option_name}
										</option>
									))}
								</Select>
								<Select
									placeholder="- Filter SLA -"
									name="sla"
									onChange={handleFilter}
								>
									<option value="OVERDUE">Overdue</option>
									<option value="1">Due In 1 Day</option>
									<option value="3">Due In 3+ Days</option>
									<option value="5">Due In 5+ Days</option>
									<option value="10">Due In 10+ Days</option>
								</Select>
								<Select
									placeholder="- Filter Departement From -"
									name="deptfrom"
									onChange={handleFilter}
								>
									{filterParam?.departments?.map((item) => (
										<option key={item.option_value} value={item.option_value}>
											From {item.option_value}
										</option>
									))}
								</Select>
								<Select
									placeholder="- Filter Departement To -"
									name="deptto"
									onChange={handleFilter}
								>
									{filterParam?.departments?.map((item) => (
										<option key={item.option_value} value={item.option_value}>
											To {item.option_value}
										</option>
									))}
								</Select>
							</Grid>
						</form>
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default TicketFilter;
