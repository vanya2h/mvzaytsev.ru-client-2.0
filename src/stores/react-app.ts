import ReactDOM from 'react-dom';

export class ReactApp {
  public constructor(
    private readonly mountId: string,
    private readonly element: React.ReactElement,
    private readonly renderer: ReactDOM.Renderer,
  ) {}

  public init = async (): Promise<void> => new Promise((resolve, reject) => {
    try {
      if (typeof window === 'undefined') {
        throw new Error('The app may be loaded only in browser-like environment');
      }

      this.renderer(this.element, document.getElementById(this.mountId), resolve);
    } catch (error) {
      reject(error);
    }
  });
}
