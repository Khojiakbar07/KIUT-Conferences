import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { BackToTop } from "./utils";

function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
      <BackToTop />
    </div>
  );
}

export default App;
