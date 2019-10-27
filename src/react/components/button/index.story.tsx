import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { Button, ButtonDesign } from "./index";

const buttonStories = storiesOf("Button", module);

buttonStories.add("Default", (): React.ReactElement => (
	<Button type="button">Hello world button</Button>
));


buttonStories.add("Basic", (): React.ReactElement => (
	<Button type="button" design={ButtonDesign.BASIC}>Hello world button</Button>
));


buttonStories.add("Primary", (): React.ReactElement => (
	<Button type="button" design={ButtonDesign.PRIMARY}>Hello world button</Button>
));

buttonStories.add("Secondary", (): React.ReactElement => (
	<Button type="button" design={ButtonDesign.SECONDARY}>Hello world button</Button>
));
