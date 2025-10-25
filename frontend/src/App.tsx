// App.js
import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import SplashScreen from "./components/splashScreen";
import BibleHomePage from "./pages/bibleHome";
import { useAppSetupContext } from "./hooks/useAppSetupContext";
import MenuBar from "./components/menubar";
import BiblePage from "./pages/bible";
import type { DashboardWidget } from "./types/types";

// Optional: global styles to remove default margin
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background: #121212;
    color: #ffffff;
  }
`;

// Splash screen container
const Splash = styled.div`
  background: #121212;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>([]);

  const { updateIsLoading, isLoading, updateError } = useAppSetupContext();

  const fetchDashboardWidgets = useCallback(async () => {
    updateIsLoading(true);
    try {
      const response = await fetch("/api/dashboard/widgets");
      const data = await response.json();
      setDashboardWidgets(data);
    } catch (error) {
      console.error("Error fetching dashboard widgets:", error);
      updateError("Error fetching dashboard widgets");
    } finally {
      updateIsLoading(false);
    }
  }, [updateIsLoading, updateError]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds

    fetchDashboardWidgets();

    return () => clearTimeout(timer);
  }, [fetchDashboardWidgets]);

  return (
    <>
      <GlobalStyle />
      {showSplash || isLoading ? (
        <Splash>
          <SplashScreen />
        </Splash>
      ) : (
        <>
          <MenuBar />
          <Routes>
            <Route path="/" element={<BibleHomePage dashboardWidgets={dashboardWidgets} />} />
            <Route path="/bible" element={<BiblePage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
