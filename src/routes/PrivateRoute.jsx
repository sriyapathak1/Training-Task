import React from 'react'
import { Route } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout';

const PrivateRoute = () => {
    
        return (
            <div>
                <Route>
                    <PrivateLayout />
                </Route>
                
            </div>
        )
    }


export default PrivateRoute
