import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { useFormik } from "formik";
import axios from 'axios';
import { useSWRConfig } from 'swr'

import { Flex, Text, Textarea, Button } from "@chakra-ui/react";

const CommentForm = (props) => {
  const { mutate } = useSWRConfig()
	const { user, token } = useAuth();
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.comment) {
        errors.comment = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true)

      try {
        const response = await axios.post(`/api/tickets/${props.ticketId}/comments`, {
          comment_body: values.comment,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        mutate(`/api/tickets/${props.ticketId}/comments`)
      } catch (err) {
        console.log(err);
      }

      formik.setSubmitting(false);
      formik.resetForm()
    }
  })

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
				<Button
					alignSelf={"end"}
					colorScheme={"teal"}
					type={"submit"}
					disabled={!formik.isValid}
          isLoading={formik.isSubmitting}
				>
					Submit
				</Button>
			</Flex>
		</form>
	);
};

export default CommentForm;
