import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export interface IUnstyledButtonProps
	extends DetailedHTMLProps<
	HTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
	> {
	disabled?: boolean;
}

export const UnstyledButton: React.FunctionComponent<IUnstyledButtonProps> = ({
	className,
	children,
	...rest
}: IUnstyledButtonProps): React.ReactElement => (
	<button
		className={classnames(className, styles["unstyled-button"])}
		type="button"
		{...rest}
	>
		{children}
	</button>
);

UnstyledButton.displayName = "UnstyledButton";
