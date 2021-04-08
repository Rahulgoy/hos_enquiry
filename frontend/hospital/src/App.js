import "./css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Doctors from "./containers/Doctors";
import NotFound from "./components/NotFound";
import DoctorProfile from "./containers/DoctorProfile";
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
            <Route exact path="/doctors" component={Doctors} />
            <Route
              exact
              path="/profile/:pid"
              component={(routerProps) => (
                <DoctorProfile pid={routerProps.match.params.pid} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
