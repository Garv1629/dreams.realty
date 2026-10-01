"use client";
import React, { createContext, useContext } from "react";

interface SmoothScrollContextType {
  lenis: null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollContext.Provider value={{ lenis: null }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
