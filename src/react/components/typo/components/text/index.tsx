import React, { HTMLProps } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export interface ITextProps extends Omit<HTMLProps<HTMLSpanElement>, "size"> {
	light?: boolean;
}

export const Text = ({
	className,
	light,
	...restProps
}: ITextProps): React.ReactElement => (
	<span
		className={classnames(styles.root, className, { [styles["text--light"]]: light })}
		{...restProps}
	/>
);

Text.displayName = "Text";
