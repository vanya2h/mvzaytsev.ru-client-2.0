import React from "react";
import { observer } from "mobx-react-lite";
import utility from "~/css/utility.module.css";
import { useInjection } from "~/react/hooks/use-injection";
import { FontSizeEnum, AccessibilityService } from "~/services/accessibility";
import { Button } from "./components/button";

export const AccessibilityMenu = observer((): React.ReactElement => {
	const accessibilityService = useInjection(AccessibilityService);

	const { size, blindness } = accessibilityService;

	return (
		<nav>
			<ul className={utility["horizontal-menu"]}>
				<li>
					<Button
						onClick={() => { accessibilityService.size = FontSizeEnum.Normal; }}
						active={size === FontSizeEnum.Normal}
						round
					>
A
					</Button>
				</li>
				<li>
					<Button
						onClick={() => { accessibilityService.size = FontSizeEnum.Big; }}
						active={size === FontSizeEnum.Big}
						big
						round
					>
A

					</Button>
				</li>
				<li>
					<Button
						onClick={() => { accessibilityService.blindness = !accessibilityService.blindness; }}
						active={blindness}
					>
						{accessibilityService.blindness ? "Выключить контраст" : "Включить контраст"}
					</Button>
				</li>
			</ul>
		</nav>
	);
});

AccessibilityMenu.displayName = "AccessibilityMenu";
