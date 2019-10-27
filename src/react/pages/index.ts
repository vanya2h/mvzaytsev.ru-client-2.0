import { FunctionComponent } from "react";
import { IndexPage } from "./index/index";
import { IPage } from "~/interfaces/page";
import { ArticlePage } from "./article";
import { SignInPage } from "./sign-in";

export enum PageKey {
	index = "index",
	article = "article",
	signIn = "signIn"
}

export const pages: Record<PageKey, IPage & FunctionComponent> = {
	index: IndexPage,
	article: ArticlePage,
	signIn: SignInPage,
};
