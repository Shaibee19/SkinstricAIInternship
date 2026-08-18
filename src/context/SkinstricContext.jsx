import { createContext, useContext, useState } from "react";

const SkinstricContext = createContext();

export function SkinstricProvider({ children }) {
  const [phaseOneData, setPhaseOneData] = useState(null);
  const [phaseTwoData, setPhaseTwoData] = useState(null);

  return (
    <SkinstricContext.Provider value={{ phaseOneData, setPhaseOneData }}>
      {children}
    </SkinstricContext.Provider>
  );
}

export function useSkinstric() {
  return useContext(SkinstricContext);
}