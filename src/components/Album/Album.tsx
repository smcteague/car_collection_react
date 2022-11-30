import React from 'react';

import { Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Stack,
    Box,
    Typography,
    Container,
 }  from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export const Album = () => {
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
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card 
                                    sx = {{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia 
                                        component = 'img'
                                        sx = {{
                                            pt: '56.25%',
                                        }}
                                        image = 'https://images.unsplash.com/photo-1523828446771-151afb8374f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80'
                                        alt = 'classic-car'           
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant='h5' component='h2'>
                                            Car Model
                                        </Typography>
                                        <Typography>
                                            Car Make
                                            Car Year
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small'>View Details</Button>
                                        <Button size='small'>Edit</Button>
                                        <Button size='small'>Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                       ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}

