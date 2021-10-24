import { Switch, Route } from "react-router";

import FullList from "./pages/FullList";
import Layout from "./components/UI/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/home"} exact></Route>

        <Route path={"/full-list"} exact>
          <FullList/>
        </Route>
     
      </Switch>

      
    </Layout>
  );
}

export default App;
