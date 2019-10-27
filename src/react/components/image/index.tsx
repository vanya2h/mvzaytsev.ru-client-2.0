import React, { ImgHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	square?: boolean,
	cover?: boolean
}

export const Image = ({
	className, children, square, cover, ...restProps
}: IImageProps): React.ReactElement => (
	<img
		className={classnames(
			className,
			styles.image,
			{ [styles["image--square"]]: square },
			{ [styles["image--cover"]]: cover },
		)}
		alt="Untitled"
		{...restProps}
	/>
);

Image.displayName = "Image";
