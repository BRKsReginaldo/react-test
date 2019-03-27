import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Theme from './config/theme'
import Layout from './Containers/Layout'
import {DashboardRoutes} from './routes'
import {GlobalUserProvider} from "./store/user";

function App() {


  return (
      <CssBaseline>
        <Theme>
            <GlobalUserProvider>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            {DashboardRoutes.map(route => (
                                <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
                            ))}
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </GlobalUserProvider>
        </Theme>
      </CssBaseline>
  )
}


export default App;
