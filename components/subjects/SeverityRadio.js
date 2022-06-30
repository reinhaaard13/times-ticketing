import { RadioGroup } from "@headlessui/react";

import Badge from "../UI/Badge";
import { SUBJECT_SEVERITY } from "../../constants/severity";

export default function SeverityRadio(props) {
	return (
		<RadioGroup value={props.selected} onChange={props.onChange}>
			<RadioGroup.Label className="sr-only">Severity Select</RadioGroup.Label>
			<div className="space-y-2">
				{SUBJECT_SEVERITY.map((severity) => (
					<RadioGroup.Option
						key={severity.level}
						value={severity.label}
						className={({ active, checked }) =>
							`${
								active
									? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
									: ""
							}
                  ${
										checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
									}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
						}
					>
						{({ active, checked }) => (
							<>
								<div className="flex w-full items-center justify-between">
									<div className="flex items-center">
										<div className="text-sm select-none">
											<RadioGroup.Label
												as="p"
												className={`font-medium uppercase ${
													checked ? "text-white" : "text-gray-900"
												}`}
											>
                        <Badge severity={severity.label} {...(checked && {checked: true})}>
												  {severity.label}
                        </Badge>
											</RadioGroup.Label>
											<RadioGroup.Description
												as="span"
												className={`inline ${
													checked ? "text-sky-100" : "text-gray-500"
												}`}
											>
												<span>Handled in {severity.handle_in} days.</span>
											</RadioGroup.Description>
										</div>
									</div>
									{checked && (
										<div className="shrink-0 text-white">
											<CheckIcon className="h-6 w-6" />
										</div>
									)}
								</div>
							</>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	);
}

function CheckIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
			<path
				d="M7 13l3 3 7-7"
				stroke="#fff"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
