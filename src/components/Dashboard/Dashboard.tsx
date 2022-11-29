import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Card } from '@mui/material';

const Root = styled('div')({
    padding: 0,
    margin: 0
})






export const Dashboard = () => {
    return (
        <Root>
            <h1>Dashboard</h1>

            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={4} >
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 1</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 2</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 3</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 4</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 5</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 6</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 7</Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 8</Card>
                    </Grid>
                </Grid>
            </Box>
        </Root>
    )
}

