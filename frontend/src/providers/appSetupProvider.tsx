import { useState } from "react";
import { AppSetupContext } from "../contexts/appSetupContext";

const AppSetupProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>("string");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateMode = (mode: string) => {
    setMode(mode);
  };

  const updateIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const updateError = (error: string | null) => {
    setError(error);
  };

  return (
    <AppSetupContext.Provider
      value={{
        mode,
        isLoading,
        error,
        updateMode,
        updateIsLoading,
        updateError,
      }}
    >
      {children}
    </AppSetupContext.Provider>
  );
};

export default AppSetupProvider;
