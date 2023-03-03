import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { BackToTop, Loader } from "./utils";

function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
      <BackToTop />
      <Loader />
    </div>
  );
}

export default App;
