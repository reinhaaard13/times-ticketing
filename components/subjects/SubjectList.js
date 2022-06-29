import React from "react";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

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

const DEF_SUBJECT = {
	1: "Low",
	2: "Medium",
	3: "High",
	4: "Critical",
};

const SubjectList = (props) => {
	return (
		<div className="">
			<table className={styles.subject_table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Subject Case Description</th>
						<th>Severity</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{CASE_SUBJECT.map((subject) => (
						<tr key={subject.id}>
							<td className="uppercase">{subject.id}</td>
							<td>{subject.name}</td>
							<td>
								<span
									className={`${styles.badge} ${
										subject.severity === 1
											? styles.badge_low
											: subject.severity === 2
											? styles.badge_medium
											: subject.severity === 3
											? styles.badge_high
											: subject.severity === 4 && styles.badge_critical
									}`}
								>
									{`${DEF_SUBJECT[subject.severity]} - ${subject.severity}`}
								</span>
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
