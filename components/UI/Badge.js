import React from "react";

import styles from "./Badge.module.css";
import { SUBJECT_SEVERITY } from "../../constants/severity";

const Badge = (props) => {
	const severity =
		props.severity === 'low'
			? styles.badge_low
			: props.severity === 'medium'
			? styles.badge_medium
			: props.severity === 'high'
			? styles.badge_high
			: props.severity === 'critical' && styles.badge_critical;

	return (
		<span className={`${styles.badge} ${severity} ${props.checked && styles.checked}`}>
			{`${SUBJECT_SEVERITY.find((severity) => severity.label === props.severity).label}`}
		</span>
	);
};

export default Badge;
