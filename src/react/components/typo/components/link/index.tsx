import React from "react";
import classnames from "classnames";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import styles from "./styles.module.css";

export interface ILinkProps extends LinkProps {
	external?: boolean;
	to: string
}

export const Link = ({
	className,
	external,
	children,
	to,
	...rest
}: ILinkProps): React.ReactElement => {
	if (!external) {
		return (
			<RouterLink
				to={to}
				className={classnames(styles.link, className)}
				{...rest}
			>
				{children}
			</RouterLink>
		);
	}

	return (
		<a
			href={to}
			className={classnames(styles.link, className)}
			{...rest}
		>
			{children}
		</a>
	);
};

Link.displayName = "Link";
