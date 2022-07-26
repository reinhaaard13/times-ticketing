import React from 'react';

import {
  Flex,
  Text,
  SkeletonCircle,
  Skeleton,
  SkeletonText,
  HStack
} from '@chakra-ui/react'

const CommentSkeleton = () => {
  return (
    <Flex gap={4} mb={6}>
			<SkeletonCircle size={12} />
			<Flex direction={"column"} w={'full'}>
				<HStack w={'full'}>
					<Skeleton height={4} w={24} />
					<Skeleton height={3} w={24} />
				</HStack>
				<SkeletonText marginTop={4} noOfLines={3} spacing={2} />
			</Flex>
		</Flex>
  );
}
 
export default CommentSkeleton;