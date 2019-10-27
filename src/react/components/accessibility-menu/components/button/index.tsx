import React from "react";
import classnames from "classnames";
import { UnstyledButton, IUnstyledButtonProps } from "~/react/components/unstyled-button";
import styles from "./styles.module.css";

export interface IButtonProps extends IUnstyledButtonProps {
	big?: boolean;
	active?: boolean;
	round?: boolean;
}

export const Button = ({
	className, big, active, round, ...restProps
}: IButtonProps):
React.ReactElement => (
	<UnstyledButton
		className={classnames(
			className,
			styles.button,
			{ [styles["button--big"]]: big },
			{ [styles["button--active"]]: active },
			{ [styles["button--round"]]: round },
		)}
		{...restProps}
	/>
);

Button.displayName = "Button";
