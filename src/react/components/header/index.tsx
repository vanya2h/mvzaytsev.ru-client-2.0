import React from "react";
import { AccessibilityMenu } from "~/react/components/accessibility-menu";
import utility from "~/css/utility.module.css";
import { Clocks } from "~/react/components/clocks";
import styles from "./styles.module.css";
import { SignInLink } from "./components/sign-in-link";

export const Header = (): React.ReactElement => (
	<header className={styles.header}>
		<div>
			<AccessibilityMenu />
		</div>
		<div className={utility["horizontal-menu"]}>
			<Clocks />
			<SignInLink />
		</div>
	</header>
);

Header.displayName = "Header";
