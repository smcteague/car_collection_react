import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Card } from '@mui/material';

import car_image_placeholder from '../../assets/images/undraw_by_my_car_re_j3jt.svg'

const Page = styled('body')({
    margin: '12px',
    padding: '0'
})

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Header = styled('h1')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Header3 = styled('h3')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Image = styled('img')({
    height: 'auto',
    width: '100%'
})



export const Dashboard = () => {
    return (
        <Page>
            <Root>
                <Header>Dashboard</Header>
                <Header3>Check out my neat-o car collection!</Header3>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={4} >
                        {/* TODO: display this content in a loop */}
                        <Grid item xs={6}>
                            <Card variant="outlined">Car 1
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 2
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 3
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 4
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 5
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 6
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 7
                                <Image
                                    src={`${car_image_placeholder}?w=248&fit=crop&auto=format`}
                                    srcSet={`${car_image_placeholder}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={'item.title'}
                                    loading="lazy"
                                />                        
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card variant="outlined">Car 8
                                <Image
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
        </Page>
    )
}

