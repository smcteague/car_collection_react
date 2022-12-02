import React, { useState } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

import { Button,
    Card,
    CardActions,
    CardContent,
    CssBaseline,
    Grid,
    Stack,
    Box,
    Typography,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
 }  from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth } from 'firebase/auth';

import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CarForm } from '../CarForm/CarForm';


const theme = createTheme();

export const Album = () => {
    let {carData, getData} = useGetData();
    let [open, setOpen] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    };
   
    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = async (carId: any) => {       
        await serverCalls.delete(`${carId}`)
        getData();
    }

    const MyAuth = localStorage.getItem('myAuth');
    console.log(MyAuth);
    if (MyAuth == 'true') {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    <Box 
                        sx = {{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography 
                                component = 'h1'
                                variant = 'h2'
                                align = 'center'
                                color = 'text.primary'
                                gutterBottom                     
                            >
                                My Car Collection
                            </Typography>
                            <Typography variant='h5' align='center' color='text.secondary' paragraph>
                                This is my neat-o car collection!
                            </Typography>
                            <Stack
                                sx = {{ pt: 4 }}
                                direction = {{sm:'column', md:'row'}}
                                spacing = {2}
                                justifyContent = 'center'
                            >

                            <Button variant='contained' onClick={handleDialogClickOpen}>Add New Car</Button>
                            <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby='form-dialog-title'>
                            <DialogTitle id='form-dialog-title'>Add New Car</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Add a New Car</DialogContentText>
                                <CarForm />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClickClose} color='primary'>Cancel</Button>
                            </DialogActions>
                            </Dialog>

                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth='md'>
                        <Grid container spacing={4}>
                            {carData.map((car: { id: string, make: string, model: string, year: string, color: string, mileage: number, price: number  }) => (
                                <Grid item key={car.id} xs={12} sm={6} md={4}>
                                    <Card 
                                        sx = {{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant='h5' component='h2'>
                                                {car.year}
                                            </Typography>
                                            <Typography>
                                                {car.make}
                                            </Typography>
                                            <Typography>
                                                {car.model}
                                            </Typography>
                                            <Typography>
                                                Color: {car.color}
                                            </Typography>
                                            <Typography>
                                                Mileage: {car.mileage}
                                            </Typography>
                                            <Typography>
                                                Price: {car.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={handleOpen} size='small'>Update</Button>
                                            <Button onClick={() => deleteData(car.id)} size='small'>Delete</Button>
                                        </CardActions>
                                        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                                            <DialogTitle id='form-dialog-title'>Update a Car</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Car id: {car.id}</DialogContentText>
                                                <CarForm id={car.id} />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose} color='primary'>Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Card>
                                </Grid>
                        ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        );
    } else {
        return (
            <div>
                <h3>Please Sign In to View Your Drone Collection</h3>
            </div>
        )
    };
}

