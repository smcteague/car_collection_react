import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Card } from '@mui/material';

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Header = styled('h1')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})




export const Dashboard = () => {
    return (
        <Root>
            <Header>Dashboard</Header>

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

