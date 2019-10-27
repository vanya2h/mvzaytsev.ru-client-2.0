import { IRoute } from "~/interfaces/route";
import { IndexPage } from "~/react/pages";

export const routes: IRoute[] = [
	{
		path: "/",
		component: IndexPage,
		key: "index",
	},
];
