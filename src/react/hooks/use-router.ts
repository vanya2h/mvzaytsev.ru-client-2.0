import { useContext } from "react";
import { __RouterContext, RouteComponentProps } from "react-router";

export const useRouter = (): RouteComponentProps<{}> => useContext(__RouterContext);
