import React, { HTMLProps } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export enum ButtonDesign {
	PRIMARY = "PRIMARY",
	BASIC = "BASIC",
	SECONDARY = "SECONDARY",
}

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
	design?: ButtonDesign,
	active?: boolean;
	round?: boolean;
	icon?: React.ReactElement,
	type: "button" | "submit" | "reset"
}

const composeClassnames = (round: boolean, active: boolean, design?: ButtonDesign): string => {
	let composed = styles.button;

	if (active) {
		composed = classnames(styles["button--active"], composed);
	}

	if (round) {
		composed = classnames(styles["button--round"], composed);
	}

	switch (design) {
		case ButtonDesign.PRIMARY: {
			composed = classnames(styles["button--primary"], composed);
			break;
		}
		case ButtonDesign.BASIC: {
			composed = classnames(styles["button--basic"], composed);
			break;
		}
		case ButtonDesign.SECONDARY: {
			composed = classnames(styles["button--secondary"], composed);
			break;
		}
		default: {
			break;
		}
	}

	return composed;
};

export const Button = ({
	children, className, icon, round = false, active = false, design, ...restProps
}: IButtonProps): React.ReactElement => (
	<button
		className={composeClassnames(round, active, design)}
		type="button"
		{...restProps}
	>
		{icon && <span className={styles.icon}>{icon}</span>}
		<span>{children}</span>
	</button>
);

Button.displayName = "Button";
