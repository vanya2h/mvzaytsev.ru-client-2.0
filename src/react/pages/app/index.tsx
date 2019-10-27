import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import { routes } from "~/common/routes";
import utility from "~/css/utility.module.css";
import { useInjection } from "~/react/hooks/use-injection";
import { AccessibilityService } from "~/services/accessibility";
import { Container } from "~/react/components/container";
import { IndexPage } from "./components/index";
import { Aside } from "./components/aside";
import { PostPage } from "./components/post";
import { SignInPage } from "./components/sign-in";
import { Header } from "./components/header";
import styles from "./styles.module.css";

export const AppPage = (): React.ReactElement => {
	const accessibility = useInjection(AccessibilityService);

	useEffect(() => {
		if (accessibility.blindness) {
			document.body.classList.add(utility.blindness);
		}

		return () => {
			document.body.classList.remove(utility.blindness);
		};
	}, [accessibility.blindness]);

	return (
		<div>
			<Container>
				<Header />
			</Container>
			<Container className={styles.content}>
				<Aside />
				<main className={styles.main}>
					<Switch>
						<Route exact path={routes.signIn} render={() => <SignInPage />} />
						<Route exact path={routes.post} render={() => <PostPage />} />
						<Route path="*" render={() => <IndexPage />} />
					</Switch>
				</main>
			</Container>
		</div>
	);
};

AppPage.displayName = "AppPage";
