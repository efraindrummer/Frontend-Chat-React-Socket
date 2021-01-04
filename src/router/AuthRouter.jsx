import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={LoginPage} />
            <Route exact path="/auth/register" component={RegisterPage} />

            <Redirect to="/auth/login" />
        </Switch>
    )
}
