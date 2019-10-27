import React from "react";
import { useHistory } from "react-router";
import classnames from "classnames";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import utility from "~/css/utility.module.css";
import { SignInIcon } from "~/react/components/icons/sign-in";
import { Button, ButtonDesign } from "~/react/components/button";
import { routes } from "~/common/routes";
import { Checkbox } from "~/react/components/checkbox";
import { Link } from "~/react/components/typo/components/link";
import { useInjection } from "~/react/hooks/use-injection";
import { AccessibilityService } from "~/services/accessibility";
import { Heading } from "~/react/components/typo/components/heading";
import styles from "./styles.module.css";

export const Header = observer((): React.ReactElement => {
	const history = useHistory();
	const accessibilityService = useInjection(AccessibilityService);
	const { blindness } = accessibilityService;

	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.menu}>
					<li>
						<Link to={routes.index}>
							<Heading className={styles.logo} level={5} as="h1">
								Максим Зайцев
							</Heading>
						</Link>
					</li>
					<li>
						<Checkbox
							checked={blindness}
							onChange={(event) => {
								runInAction(() => {
									accessibilityService.blindness = (event.target as HTMLInputElement).checked;
								});
							}}
						>
							Контрастность
						</Checkbox>
					</li>
				</ul>
			</nav>
			<div className={classnames(utility["horizontal-menu"], styles.menu)}>
				<Button
					onClick={() => history.push(routes.signIn)}
					type="button"
					design={ButtonDesign.SECONDARY}
					icon={<SignInIcon className={styles.icon} />}
				>
					Авторизация
				</Button>
			</div>
		</header>
	);
});

Header.displayName = "Header";
