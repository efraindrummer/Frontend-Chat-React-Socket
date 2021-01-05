import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated, //para saber si esta autenticado
    component: Component, //rederiza el componente
    ...rest //recibe el resto de propiedades que se pueda enviar a la ruta
}) => {
    return (
        <Route {...rest}
            component={ (props) =>  (
                (isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/auth" />
            )} 
        />
    )
}
