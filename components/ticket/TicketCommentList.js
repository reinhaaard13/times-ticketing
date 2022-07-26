import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import CommentSkeleton from "../UI/skeletons/CommentSkeleton";
import TicketCommentItem from "./TicketCommentItem";

const TicketCommentList = (props) => {
	return (
		<Flex direction={"column"}>
			<Text
				fontSize={"md"}
				mb={6}
				fontWeight={"semibold"}
				className={"text-lime-500"}
			>
				Comments
			</Text>
			{props.comments ? (
				props.comments.map((comment) => {
					return (
						<TicketCommentItem key={comment.comment_id} comment={comment} />
					);
				})
			) : (
				<CommentSkeleton />
			)}

			{props.comments?.length === 0 && (
				<Text fontSize={"sm"} alignSelf={"center"} mb={8}>
					No comments yet
				</Text>
			)}
		</Flex>
	);
};

export default TicketCommentList;
