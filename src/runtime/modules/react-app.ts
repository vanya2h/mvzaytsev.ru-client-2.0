import React from "react";
import ReactDom from "react-dom";
import { ContainerModule, Container } from "inversify";
import { Root } from "~/react/components/root";
import { ReactApp } from "~/stores/react-app";
import { REACT_APP } from "~/consts";

export const createReactAppModule = (container: Container) => new ContainerModule((bind) => {
	const reactApp = new ReactApp("root", React.createElement(Root, {
		container,
	}), ReactDom.render);

	bind(REACT_APP).toConstantValue(reactApp);
});
