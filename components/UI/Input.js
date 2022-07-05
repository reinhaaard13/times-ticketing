import React from "react";

const Input = ({label, name, type, id, value, onChange, onBlur, error, className}) => {
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="uppercase font-semibold text-slate-500 mb-2 text-sm"
			>
				{label}
			</label>
			<div className="flex flex-col mb-4">
				<input
					type= {type ? type : "text"}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					className="bg-slate-300 text-slate-800 p-3 rounded-md focus:outline-slate-500"
				/>
				{error && (
					<p className="text-red-500 text-sm ">{error}</p>
				)}
			</div>
		</div>
	);
};

export default Input;
