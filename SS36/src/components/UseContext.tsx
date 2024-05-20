import React, { createContext, useState } from "react";
import A from "./A";
export const SetUseContext = createContext("");

export default function UseContext() {
  const [name, setName] = useState<string>("minh thu");
  return (
    <>
      {/* useContext là một hook.
    
    */}
      <SetUseContext.Provider value={name}>
        <A></A>
      </SetUseContext.Provider>
    </>
  );
}
