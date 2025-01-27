declare global {
  interface Window {
    __webpack_init_sharing__: (scope: string) => Promise<void>;
    __webpack_share_scopes__: { [key: string]: any };
  }

  declare module "plugins/*" {
    const Component: React.ComponentType<any>;
    export default Component;
  }
}
