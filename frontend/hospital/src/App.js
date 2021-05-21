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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResetPassword from "./containers/Authentication/ResetPassword";
import ResetPasswordConfirm from "./containers/Authentication/ResetPasswordConfirm";
import Activate from "./containers/Authentication/Activate";
import Images from "./containers/Images";
import DoctorByImage from "./components/DoctorByImage";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div className="app-container">
      <ReactNotification />
      <Provider store={store}>
        <Router>
          <Layout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              component={ResetPasswordConfirm}
            />
            <Route exact path="/activate/:uid/:token" component={Activate} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/images" component={Images} />
            <Route
              exact
              path="/images/:pid"
              component={(routerProps) => (
                <DoctorByImage pid={routerProps.match.params.pid} />
              )}
            />
            <Route
              exact
              path="/profile/:pid"
              component={(routerProps) => (
                <DoctorProfile pid={routerProps.match.params.pid} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
