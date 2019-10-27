import React from "react";
import { Container } from "inversify";
import {
	BrowserRouter, Switch, Route, Redirect,
} from "react-router-dom";
import { ContainerProvider } from "~/providers/container";
import { Layout } from "~/react/components/layout";
import { pages } from "~/react/pages";
import { IndexPage } from "~/react/pages/index/index";

export interface IRootProps {
	container: Container
}

export const Root = ({ container }: IRootProps): React.ReactElement => (
	<ContainerProvider container={container}>
		<BrowserRouter basename="/">
			<Layout>
				<Switch>
					{Object.values(pages).map((page) => <Route {...page.routeDescriptor} />)}
					<Route
						path="*"
						render={() => <Redirect from="/*" to={IndexPage.routeDescriptor.path} />}
					/>
				</Switch>
			</Layout>
		</BrowserRouter>
	</ContainerProvider>
);

Root.displayName = "Root";
