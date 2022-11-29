import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Card } from '@mui/material';

import car_image_placeholder from '../../assets/images/undraw_by_my_car_re_j3jt.svg'

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Header = styled('h1')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Image = styled('img')



export const Dashboard = () => {
    return (
        <Root>
            <Header>Dashboard</Header>

            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={4} >
                    <Grid item xs={6}>
                        <Card variant="outlined">Car 1
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 2
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 3
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 4
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 5
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 6
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 7
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card variant="outlined">Car 8
                            <img
                                src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'item.title'}
                                loading="lazy"
                            />                        
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Root>
    )
}

