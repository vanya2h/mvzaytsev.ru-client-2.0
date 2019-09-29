export interface IRoute{
  component: React.FunctionComponent<{}>;
  path: string;
  exact?: boolean;
  key?: string;
  protected?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onConstruct?: (...args: any[]) => string;
}
