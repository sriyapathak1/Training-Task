import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from '../layouts/Authlayout';

const AuthRoute = () => {
    
        return (
            <div>
                <Route>
                    <AuthLayout />

                    {/* </AuthLayout> */}
                </Route>
            </div>
        )
    }


export default AuthRoute
