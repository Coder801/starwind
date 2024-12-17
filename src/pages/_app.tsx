import "@/styles/index.scss";
import { ComponentType } from "react";

import { AppProvider } from "@/context/AppContext";

import Home from "./home";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  const routesMap: Record<string, ComponentType> = {
    "/": Home,
  };

  const PageComponent = routesMap[router.pathname] || Component;

  return (
    <AppProvider>
      <PageComponent {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
