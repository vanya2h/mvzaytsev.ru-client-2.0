import React, { HTMLProps } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface IHeadingProps extends HTMLProps<HTMLHeadingElement> {
	level?: HeaderLevel;
}

export const Heading = ({
	level = 1, as, className, children, ...rest
}: IHeadingProps): React.ReactElement => React.createElement(
	as || `h${level || 1}`,
	{
		className: classnames(
			className,
			styles.heading,
			// @ts-ignore
			styles[`header-${level}`],
		),
		...rest,
	},
	children,
);

Heading.displayName = "Heading";
