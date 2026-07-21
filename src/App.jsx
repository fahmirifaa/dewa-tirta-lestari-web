import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#1f2937",
            fontSize: "14px",
            borderRadius: "10px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          },
          success: {
            iconTheme: { primary: "#0099E5", secondary: "#ffffff" },
          },
        }}
      />
    </>
  );
}

export default App;