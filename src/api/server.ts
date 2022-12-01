let token = `cd3b845ac83d55fe8a3bb5d49c4920c544dc30cdd12ad1eb`;

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://buttery-green-melody.glitch.me/api/cars`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any) => {
        const response = await fetch(`https://buttery-green-melody.glitch.me/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },
    update: async (id: string, data: any) => {
        const response = await fetch(`https://buttery-green-melody.glitch.me/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    },
    delete: async (id: string) => {
        const response = await fetch(`https://buttery-green-melody.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        })
    },
}

