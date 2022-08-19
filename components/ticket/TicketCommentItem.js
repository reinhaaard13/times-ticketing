import React from "react";
import moment from "moment";

import { Flex, Avatar, Text, Divider } from "@chakra-ui/react";
import AttachmentItem from "./AttachmentItem";

const TicketCommentItem = ({comment}) => {
	return (
		<>
		<Flex gap={4} my={3}>
			<Avatar bg={"red.500"} name={comment.User.name} />
			<Flex direction={"column"}>
				<Flex alignItems={"baseline"} gap={2}>
					<Text fontSize={"md"} fontWeight={"semibold"}>
						{comment.User.name}
					</Text>
					<Text fontSize={"sm"} textColor={"GrayText"}>
						{moment(comment.created_date).fromNow()}
					</Text>
				</Flex>
				<Text fontSize={"sm"}>
					{comment.comment_body}
				</Text>
				{ comment.Attachment && (
					<AttachmentItem attachment={comment.Attachment} />
				)}
			</Flex>
		</Flex>
		<Divider />
		</>
	);
};

export default TicketCommentItem;
