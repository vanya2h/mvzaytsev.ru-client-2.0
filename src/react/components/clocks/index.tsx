import React, { useEffect, useState, HTMLProps } from "react";
import { ClocksIcon } from "../icons/clocks";
import styles from "./styles.module.css";

export interface IClocksProps extends HTMLProps<HTMLSpanElement> {}

export const Clocks = (props: IClocksProps) => {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		setTimeout(() => {
			setDate(new Date());
		}, 1000);
	}, []);

	return (
		<span {...props}>
			<ClocksIcon className={styles.icon} />
			<span className={styles.text}>
				{`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`}
			</span>
		</span>
	);
};

Clocks.displayName = "Clocks";
