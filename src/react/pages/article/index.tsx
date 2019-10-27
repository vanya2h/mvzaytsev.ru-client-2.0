import React from "react";
// import { Typo } from '~/react/components/typo';
import { IPage } from "~/interfaces/page";

export const ArticlePage: React.FunctionComponent & IPage = (): React.ReactElement => (
	<div>
    Article
	</div>
);


ArticlePage.displayName = "ArticlePage";

ArticlePage.routeDescriptor = {
	path: "/article",
	component: ArticlePage,
	key: "article",
};
