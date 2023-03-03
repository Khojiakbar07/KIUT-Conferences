import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { BackToTop, Loader } from "./utils";
import { LoaderContext } from "./context/LoaderContext";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
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
