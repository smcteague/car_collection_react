import React, { useState } from 'react';

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

import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CarForm } from '../CarForm/CarForm'


const cards = [0, 1, 2, 3, 4];

const theme = createTheme();

export const Album = () => {
    let {carData, getData} = useGetData();
    let [open, setOpen] = useState(false);


    
    // let carDataCapture = () => {
    //     let carDataList = [];
    //     for (let i = 0; i < carData.length; i++) {
    //         carDataList[i] = carData[i]
    //     }
    //     return carDataList
    // } 
    
    // console.log(carData[0]['model']);


    // {carData[card]['year']}
    // {carData[card]['make']}
    // {carData[card]['model']}
    // {carData[card]['color']}
    // {carData[card]['mileage']}
    // {carData[card]['price']}

    // {carData[card]['id']}

    
    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        // serverCalls.delete(`${}`)
    }

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
                            direction = 'row'
                            spacing = {2}
                            justifyContent = 'center'
                        >
                            <Button variant='contained'>Create New Car</Button>
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
                                        <Button onClick={deleteData} size='small'>Delete</Button>
                                    </CardActions>
                                    <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                                        <DialogTitle id='form-dialog-title'>Update a Car</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>Car id: </DialogContentText>
                                            <CarForm id='' />
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
}

