import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, Typography, Grid } from '@material-ui/core';
import { MenuList } from './../../../config/constant';

const NavBar = () => {
    
        return (
            <div>
                <Grid container >
                    <Grid item xs={3}>
                        <Typography>Trainee Portal</Typography>
                    </Grid>
                    <Grid item xs={9}>
                    <ListItem>
                    {MenuList.map(field => (
                        <Link key={field.label} to={field.link}>
                            <ListItem>{field.label} </ListItem>
                        </Link>
                        
                    ) )}
                    </ListItem>
                    </Grid>
                </Grid>
               
                
            </div>
        )
    }


export default NavBar;
