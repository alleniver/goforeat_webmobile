import React, { Component } from 'react';
import { Switch,Route,BrowserRouter,Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import asyncComponent from './asyncComponent';
//styles
import '@/styles/transition.less';
//utils
import { isAuth } from '@/utils/auth';
//views
const home = asyncComponent(() => import("@/pages/homepage/HomePage"));
const login = asyncComponent(() => import("@/pages/loginpage/LoginPage"));
const myorder = asyncComponent(() => import("@/pages/myOrder/MyOrderPage"));
const content = asyncComponent(() => import("@/pages/contentpage/ContentPage"));
const makePayment = asyncComponent(() => import("@/pages/makePayment/makePaymentPage"));

//styles


function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route 
      {...rest}
      render={props => isAuth() ? <Component /> : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default class routeConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={({location}) => (
          <TransitionGroup className="route-container">
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="slide">
              <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/login" component={login} />
                <Route path="/content" component={content}/>
                <Route path="/makePayment" component={makePayment}/>
                <Route path="/myorder" component={myorder} onEnter={AUTH()}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )
        }/>
      </BrowserRouter>
    )
  }
}