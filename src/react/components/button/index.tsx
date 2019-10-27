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
	type: "button" | "submit" | "reset"
}

const composeClassnames = (design?: ButtonDesign): string => {
	let composed = styles.button;

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
	children, className, design, ...restProps
}: IButtonProps): React.ReactElement => (
	<button
		className={composeClassnames(design)}
		type="button"
		{...restProps}
	>
		<span>
			{children}
		</span>
	</button>
);

Button.displayName = "Button";
