import React from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
	Input
} from '@chakra-ui/react'

const InputField = ({label, name, type, id, value, onChange, onBlur, error, className, touched}) => {
	return (
		<FormControl className={className} isInvalid={error && touched}>
			<FormLabel
				htmlFor={id}
				fontWeight={'semibold'}
				fontSize={'sm'}
				mb={2}
				textTransform={'uppercase'}
				textColor={'gray.600'}
			>
				{label}
			</FormLabel>
			<div className="flex flex-col mb-4">
				<Input
					type= {type ? type : "text"}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage className="text-red-500 text-sm ">{error}</FormErrorMessage>

			</div>
		</FormControl>
	);
};

export default InputField;
