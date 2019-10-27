import React, { HTMLProps } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export interface IContainerProps extends HTMLProps<HTMLDivElement> {}

export const Container = ({ className, children, ...restProps }: IContainerProps):
React.ReactElement => (
	<div className={styles["safe-zone"]}>
		<div className={classnames(styles.container, className)} {...restProps}>
			{children}
		</div>
	</div>
);

Container.displayName = "Container";
