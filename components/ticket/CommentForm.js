import React, { useRef } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useFormik } from "formik";
import axios from "axios";
import { useSWRConfig } from "swr";

import {
	Flex,
	Text,
	Textarea,
	Button,
	IconButton,
	Input,
	Box,
} from "@chakra-ui/react";
import { RiAttachmentLine, RiCloseLine } from "react-icons/ri";

const CommentForm = (props) => {
	const { mutate } = useSWRConfig();
	const { user, token } = useAuth();
	const fileInputRef = useRef();
	const formik = useFormik({
		initialValues: {
			comment: "",
			attachment: "",
		},
		validate: (values) => {
			const errors = {};
			if (!values.comment) {
				errors.comment = "Required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			formik.setSubmitting(true);
      const formData = new FormData();
      formData.append("comment_body", values.comment);
      formData.append("attachment", values.attachment);

			try {
				const response = await axios.post(
					`/api/tickets/${props.ticketId}/comments`,
					formData,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				mutate(`/api/tickets/${props.ticketId}/comments`);
			} catch (err) {
				console.log(err);
			}

      fileInputRef.current.value = "";
			formik.setSubmitting(false);
			formik.resetForm();
		},
	});

	const addFileHandler = (e) => {
		console.log(fileInputRef);
		fileInputRef.current.click();
	};

	const pickedFileHandler = (e) => {
		const files = e.target.files[0];
		if (files?.size > 10000000) {
			formik.setErrors({ attachment: "Attachment size is too large" });
		} else if (!files) {
			formik.setFieldValue("attachment", null);
		} else {
			formik.setFieldValue("attachment", files);
		}
	};

  const removeFileHandler = (e) => {
    formik.setFieldValue("attachment", null);
    fileInputRef.current.value = "";
  }

	return (
		<form onSubmit={formik.handleSubmit}>
			<Flex direction={"column"} gap={4}>
				<Textarea
					placeholder={`Add a comment as ${user?.name}`}
					resize={"none"}
					name="comment"
					value={formik.values.comment}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
          {formik.values.attachment && (
            <Flex
              px={2}
              py={2}
              height={"fit-content"}
              background={"teal"}
              rounded={5}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={"medium"}
                color={"white"}
                mr={2}
              >
                {formik.values.attachment.name}
              </Text>
              <IconButton
                icon={<RiCloseLine />}
                size={"xs"}
                colorScheme={"blackAlpha"}
                onClick={removeFileHandler}
              />
            </Flex>
          )}
				<Flex alignSelf={"flex-end"} w={"full"} alignItems="center">
					<Input
						type="file"
						visibility={"hidden"}
						ref={fileInputRef}
						onChange={pickedFileHandler}
					/>
					<IconButton
						icon={<RiAttachmentLine />}
						mr={2}
						onClick={addFileHandler}
					/>
					<Button
						colorScheme={"teal"}
						type={"submit"}
						disabled={!formik.isValid}
						isLoading={formik.isSubmitting}
						width={64}
					>
						Submit
					</Button>
				</Flex>
			</Flex>
		</form>
	);
};

export default CommentForm;
