import { createContext } from "react";
import type { AppSetupContextType } from "../types/appSetupContextTypes";

const AppSetupContext = createContext<AppSetupContextType | undefined>(
  undefined
);

export { AppSetupContext };
