import React from "react";
// import { Typo } from '~/react/components/typo';
import { IPage } from "~/interfaces/page";

export const IndexPage: React.FunctionComponent & IPage = (): React.ReactElement => (
	<div>
    Index
	</div>
);

IndexPage.displayName = "IndexPage";

IndexPage.routeDescriptor = {
	path: "/index",
	component: IndexPage,
	key: "index",
};
