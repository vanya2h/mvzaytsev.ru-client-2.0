import React from "react";
import { Container } from "inversify";
import {
	BrowserRouter, Switch, Route, Redirect,
} from "react-router-dom";
import { ContainerProvider } from "~/providers/container";
import { routes } from "~/common/routes";
import { AppPage } from "~/react/pages/app";

export interface IRootProps {
	container: Container
}

export const Root = ({ container }: IRootProps): React.ReactElement => (
	<ContainerProvider container={container}>
		<BrowserRouter basename="/">
			<Switch>
				<Route
					exact
					path={[
						routes.index,
						routes.signIn,
						routes.signUp,
						routes.post,
						routes.posts,
						routes.page,
					]}
					component={AppPage}
				/>
				<Route
					path="*"
					render={() => <Redirect to={routes.index} />}
				/>
			</Switch>
		</BrowserRouter>
	</ContainerProvider>
);

Root.displayName = "Root";
