import React, { useEffect, useState } from "react";
import axios from 'axios'

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

const TicketFilter = React.forwardRef((props, ref) => {
	const [filterParam, setFilterParam] = useState();

	useEffect(() => {
		axios
			.get("/api/tickets/filterParam")
			.then((res) => setFilterParam(res.data));
	}, []);

	return (
		<Accordion allowToggle>
			<AccordionItem border={"none"} bgColor={"none"}>
				<AccordionButton color={"white"} w={"fit-content"}>
					<Box flex="1" textAlign={"right"}>
						Filter
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<Portal containerRef={ref}>
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
								<Grid
									templateColumns={["", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
									gap={2}
								>
									<Select placeholder="-- Filter Product --">
										{filterParam?.products?.map((item) => (
											<option key={item.product_id} value={item.product_id}>
												{item.product_name}
											</option>
										))}
									</Select>
									<Select placeholder="-- Filter Status --">
										<option value="OPEN">Open</option>
										<option value="PROGRESS">Progress</option>
										<option value="CLOSED">Closed</option>
									</Select>
									<Select placeholder="-- Filter Case Subject --">
                  {filterParam?.casesubjects?.map((item) => (
											<option key={item.id} value={item.id}>
												{item.subject}
											</option>
										))}
									</Select>
									<Select placeholder="-- Filter Severity --">
										<option value="LOW">Low</option>
										<option value="MEDIUM">Medium</option>
										<option value="HIGH">High</option>
										<option value="CRITICAL">Medium</option>
									</Select>
									<Select placeholder="-- Filter SLA --">
										<option value="OVERDUE">Overdue</option>
										<option value="0">Due Today</option>
										<option value="1">Due In 1 Day</option>
										<option value="2">Due In 2 Days</option>
										<option value="3">Due In 3 Days</option>
										<option value="99">Due In More Than 3 Days</option>
									</Select>
									<Button>Apply Filter</Button>
								</Grid>
							</form>
						</Flex>
					</AccordionPanel>
				</Portal>
			</AccordionItem>
		</Accordion>
	);
});
TicketFilter.displayName = "TicketFilter";

export default TicketFilter;
