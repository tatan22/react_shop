<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
	    <Layout>
		    <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />			
                <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                <Route path="*" element={<NotFound />} />
		    </Routes>
	    </Layout>
    </BrowserRouter>
  );
};

export default App;
=======
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/password-recovery" component={PasswordRecovery} />
					<Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
>>>>>>> 5c68a278acbabd781b72eeb9ac23c04a10359c94
