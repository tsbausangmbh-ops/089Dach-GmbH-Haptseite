import { createContext, useContext, ReactNode } from "react";

interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

interface SSRContextType {
  seoData: SEOData | null;
  setSEOData: (data: SEOData) => void;
  isSSR: boolean;
}

const SSRContext = createContext<SSRContextType>({
  seoData: null,
  setSEOData: () => {},
  isSSR: false,
});

export function useSSRContext() {
  return useContext(SSRContext);
}

let globalSSRData: SEOData | null = null;

export function getSSRData(): SEOData | null {
  return globalSSRData;
}

export function resetSSRData() {
  globalSSRData = null;
}

export function SSRProvider({ children, isSSR = false }: { children: ReactNode; isSSR?: boolean }) {
  const setSEOData = (data: SEOData) => {
    if (isSSR) {
      globalSSRData = data;
    }
  };

  return (
    <SSRContext.Provider value={{ seoData: globalSSRData, setSEOData, isSSR }}>
      {children}
    </SSRContext.Provider>
  );
}
