export {};

declare global {
  interface Window {
    api: {
      message: string;
    };
  }
}
