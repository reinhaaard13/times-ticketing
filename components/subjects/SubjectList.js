import React from "react";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

import Badge from "../UI/Badge";
import styles from "./SubjectList.module.css";

const SubjectList = (props) => {
	const editHandler = (e) => {
		e.preventDefault();
		props.editHandler(props.subject);
	}

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
								<button onClick={editHandler.bind(this, subject.id)}>
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
