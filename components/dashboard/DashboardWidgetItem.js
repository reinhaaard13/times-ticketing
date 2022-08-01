import React, {useRef} from "react";
import { motion } from "framer-motion";
import { Box, Flex, Text, Skeleton } from "@chakra-ui/react";

const DashboardWidgetItem = ({ title, amount, icon, accentColor }) => {
	const constraintRef = useRef()
	return (
		<motion.div ref={constraintRef}>
			<Box
				// flexGrow={1}
				borderWidth={"1px"}
				borderRadius={"lg"}
				shadow={"lg"}
				className="bg-white/90 cursor-pointer"
				backdropFilter={"auto"}
				backdropBlur={"base"}
				p={3}
				drag
				dragConstraints={constraintRef}
				dragElastic={0.1}
				whileTap={{ scale: 1.05 }}
				as={motion.div}
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
				{amount !== undefined ? (
					<Text
						textTransform={"uppercase"}
						fontSize={"2xl"}
						fontWeight={"semibold"}
						letterSpacing={"wide"}
					>
						{amount}
					</Text>
				) : (
					<Skeleton height={8} width={20} />
				)}
			</Box>
		</motion.div>
	);
};

export default DashboardWidgetItem;
