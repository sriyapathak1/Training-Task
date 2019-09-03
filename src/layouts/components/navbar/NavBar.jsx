import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, Typography } from '@material-ui/core';
import { MenuList } from './../../../config/constant';

const NavBar = () => {
    
        return (
            <div>
                <Typography>Trainee Portal</Typography>
                <ListItem>
                    {MenuList.map(field => (
                        <Link key={field.label} to={field.link}>
                            <ListItem>{field.label} </ListItem>
                        </Link>
                        
                    ) )}
                </ListItem>
            </div>
        )
    }


export default NavBar;
