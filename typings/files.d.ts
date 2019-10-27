/* eslint-disable import/no-default-export */
declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.woff" {
	const path: string;
	export default path;
}

declare module "*.woff2" {
	const path: string;
	export default path;
}

declare module "*.png" {
	const path: string;
	export default path;
}

declare namespace Common {
  type ViewportType = "Mobile" | "MiniTablet" | "Tablet" | "Desktop" | "Large";
  type Viewport = Record<ViewportType, [number, number]>;
}
