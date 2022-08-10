import React from "react";

import { Flex, Icon, Box, Text } from "@chakra-ui/react";

import {
	BsFileSpreadsheet,
	BsFileWord,
	BsFilePpt,
	BsFilePdf,
	BsFileMusic,
	BsFileImage,
	BsFilePlay,
	BsFileText,
} from "react-icons/bs";

const AttachmentItem = ({ attachment }) => {
	const icon = {
		docx: BsFileWord,
		doc: BsFileWord,
		xlsx: BsFileSpreadsheet,
		xls: BsFileSpreadsheet,
		pptx: BsFilePpt,
		ppt: BsFilePpt,
		mp3: BsFileMusic,
		jpg: BsFileImage,
		png: BsFileImage,
		mp4: BsFilePlay,
		txt: BsFileText,
		pdf: BsFilePdf,
	};

	return (
		<a
			href={
				process.env.NEXT_PUBLIC_STORAGE_URI + "/" + attachment.attachment_url
			}
			target="_blank"
			rel="noreferrer"
		>
			<Flex
				border={"1px"}
				borderColor={"gray.300"}
				px={4}
				py={2}
				alignItems={"center"}
				rounded={"lg"}
				transition="all 0.2s ease-in-out"
				overflow={"clip"}
        transform={'translateY(0)'}
				_hover={{
					backgroundColor: "gray.100",
					shadow: "md",
					transform: "translateY(-1px)",
					overflow: "clip",
				}}
			>
				<Icon
					as={icon[attachment.attachment_url.split(".").pop()]}
					fontSize={"7xl"}
					opacity={0.5}
					position={"absolute"}
					right={0}
					top={-2}
				/>
				<Box ml={3}>
					<Text ml={2} fontWeight={"semibold"}>
						{attachment.attachment_url.split("\\").pop()}
					</Text>
					<Text ml={2} textColor={"gray.500"}>
						{attachment.attachment_url.split(".").pop().toUpperCase()}
					</Text>
				</Box>
			</Flex>
		</a>
	);
};

export default AttachmentItem;
