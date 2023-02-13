import Layout from "./components/layout/Layout";
import Routes from "./routes/index";
import { BackToTop } from "./utils";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
      <BackToTop/>
    </div>
  );
}

export default App;
