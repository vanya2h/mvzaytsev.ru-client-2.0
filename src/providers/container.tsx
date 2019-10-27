import React from "react";
import { Container } from "inversify";

export const InversifyContext = React.createContext<{ container: Container | null }>({
	container: null,
});

interface IProps {
	container: Container;
	children?: React.ReactElement;
}

export const ContainerProvider = ({
	container,
	children,
}: IProps): React.ReactElement => (
	<InversifyContext.Provider value={{ container }}>
		{children}
	</InversifyContext.Provider>
);
