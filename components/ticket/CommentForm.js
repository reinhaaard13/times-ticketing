import React from 'react';

import { Flex, Text, Textarea, Button } from "@chakra-ui/react";

const CommentForm = (props) => {
  return (
    <Flex direction={'column'} gap={4}>
      <Textarea placeholder={`Add a comment as ${'Reinhard Kevin'}`} resize={'none'} />
      <Button alignSelf={'end'} colorScheme={'teal'}>Submit</Button>
    </Flex>
  );
}
 
export default CommentForm;