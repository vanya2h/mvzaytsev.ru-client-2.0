import React, { HTMLProps } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export interface ICheckboxProps extends HTMLProps<HTMLInputElement> {
	error?: boolean;
}

export const Checkbox = ({
	className,
	disabled,
	children,
	error,
	checked,
	...restProps
}: ICheckboxProps): React.ReactElement => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	return (
		<span className={styles.wrapper}>
			<input
				ref={inputRef}
				className={styles["hidden-checkbox-input"]}
				type="checkbox"
				disabled={disabled}
				checked={checked}
				{...restProps}
			/>
			<button
				type="button"
				onClick={() => inputRef.current && inputRef.current.click()}
				className={classnames(
					className,
					styles.checkbox,
					{ [styles["checkbox--active"]]: checked },
					{ [styles["checkbox--disabled"]]: disabled },
					{ [styles["checkbox--error"]]: error },
				)}
			>
				<div className={styles.dot} />
			</button>
			<span className={styles.text}>{children}</span>
		</span>
	);
};

Checkbox.displayName = "Checkbox";
