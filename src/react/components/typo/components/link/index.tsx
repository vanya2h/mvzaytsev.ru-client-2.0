import React from "react";
import classnames from "classnames";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import styles from "./styles.module.css";

export interface ILinkProps extends LinkProps {}

export const Link = ({
	className,
	children,
	...rest
}: ILinkProps): React.ReactElement => (
	<RouterLink
		className={classnames(styles.link, className)}
		{...rest}
	>
		{children}
	</RouterLink>
);

Link.displayName = "Link";
