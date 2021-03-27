import "./css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./components/NotFound";
import store from "./store";
import { Provider } from "react-redux";
import Layout from "./hocs/Layout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
