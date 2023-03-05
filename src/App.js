import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { BackToTop, Loader } from "./utils";
import { LoaderContext } from "./context/LoaderContext";
import { useState } from "react";
import Alert from "./components/alert/Alert";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Alert />
      <Layout>
        <LoaderContext.Provider value={{ setIsLoading }}>
          <Outlet />
        </LoaderContext.Provider>
      </Layout>
      <BackToTop />
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default App;
