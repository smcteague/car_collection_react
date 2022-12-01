import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';


export const useGetData = () => {
    const [carData, setData] = useState<any>([]);

    async function handleDataFetch() {
        const result = await serverCalls.get()
        setData(result)
    }

    // useEffect hook to add our data to the react state
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {carData, getData: handleDataFetch}
}

