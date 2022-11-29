import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, } from '@mui/material';

const Root = styled('div')({
    padding: 0,
    margin: 0
})






export const Dashboard = () => {
    return (
        <Root>
            <h1>Dashboard</h1>

            <Box sx={{ flexGrow: 1 }} >
                {/* Setting up the Fluid Grid system */}
                <Grid container spacing={4} >
                    <Grid item xs={6}>
                        <div className='grid-elements'>Car 1</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='grid-elements'>Car 2</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='grid-elements'>Car 3</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='grid-elements'>Car 4</div>
                    </Grid>
                </Grid>
            </Box>

        </Root>
    )
}

