import { useContext } from "react";
import { AppSetupContext } from "../contexts/appSetupContext";

export const useAppSetupContext = () => {
  const context = useContext(AppSetupContext);
  if (!context) {
    throw new Error(
      "useAppSetupContext must be used within an AppSetupProvider"
    );
  }
  return context;
};
