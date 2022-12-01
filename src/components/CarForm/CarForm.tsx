import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseColor,
    chooseMileage,
    choosePrice
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';


interface CarFormProps {
    id?: string;
    data?: {};
}

interface CarState {
    make: string;
    model: string;
    year: string;
    color: string;
    mileage: number;
    price: number;
}

export const CarForm = (props: CarFormProps) => {
    const dispatch = useDispatch();
    let {carData, getData} = useGetData();
    const store = useStore();
    const {register, handleSubmit} = useForm({});

    const onSubmit = async (data: any, event: any) => {
        console.log(props.id)

        if (props.id!) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))        
            dispatch(chooseYear(data.year))
            dispatch(chooseColor(data.color))        
            dispatch(chooseMileage(data.mileage))
            dispatch(choosePrice(data.price))
            await serverCalls.create(store.getState())
            window.location.reload()    
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} make='make' placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Make</label>
                    <Input {...register('model')} make='model' placeholder='Model' />
                </div>
                <div>
                    <label htmlFor="year">Make</label>
                    <Input {...register('year')} make='year' placeholder='Year' />
                </div>
                <div>
                    <label htmlFor="color">Make</label>
                    <Input {...register('color')} make='color' placeholder='Color' />
                </div>
                <div>
                    <label htmlFor="mileage">Make</label>
                    <Input {...register('mileage')} make='mileage' placeholder='Mileage' />
                </div>
                <div>
                    <label htmlFor="price">Make</label>
                    <Input {...register('price')} make='price' placeholder='Price' />
                </div>       
                <Button {...register('series')} name='series' placeholder='Series' />                                         
            </form>
        </div>
    )
}

