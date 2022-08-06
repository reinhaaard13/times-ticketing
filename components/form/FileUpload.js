import React, { useRef } from "react";

const FileUpload = (props) => {
	return (
		<React.Fragment>
			<input
				type="file"
				accept=".jpg, .png, .jpeg, .pdf"
				onChange={props.onPickedImage}
        name={props.name}
        id={props.id}
				multiple
			/>
		</React.Fragment>
	);
};

export default FileUpload;
