import React from "react";
import axios from 'axios'
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

import Badge from "../UI/Badge";
import styles from "./SubjectList.module.css";

// Severity
// Low: 1
// Medium: 2
// High: 3
// Critical: 4
const CASE_SUBJECT = [
	{
		id: "cs01",
		name: "Settlement Failed Debit",
		severity: 2,
	},
	{
		id: "cs02",
		name: "Settlement Failed Flazz",
		severity: 1,
	},
	{
		id: "cs03",
		name: "Settlement Failed E-Money",
		severity: 4,
	},
	{
		id: "cs04",
		name: "Kiosk Error",
		severity: 2,
	},
	{
		id: "cs05",
		name: "Kiosk Connection Error",
		severity: 1,
	},
	{
		id: "cs06",
		name: "EDC Connection Error",
		severity: 3,
	},
];

const SubjectList = (props) => {
	console.log(props.subjects);

	return (
		<div className="w-full overflow-x-auto rounded-lg shadow">
			<table className={styles.subject_table}>
				<thead>
					<tr>
						<th className="w-24">No.</th>
						<th>Subject Case Description</th>
						<th className="w-24">Severity</th>
						<th className="w-52">Actions</th>
					</tr>
				</thead>
				<tbody>
					{props.subjects.map((subject, idx) => (
						<tr key={idx}>
							<td className="uppercase">{idx+1}</td>
							<td>{subject.subject}</td>
							<td>
								<Badge severity={subject.severity} />
							</td>
							<td className={styles.actions}>
								<button>
									<span>
										<BiPencil />
									</span>
									Edit
								</button>
								<button>
									<span>
										<FaRegTrashAlt />
									</span>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};



export default SubjectList;
