const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImU3YjFlOGIxOTVjY2U4YjgwN2U3YmM4OTI0MGZlMGY1MTk3ODkzZWJlMWVhNzdiNCIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE3IDA4OjQwOjU1LjY1OTU2OFwiIn0.9yzMAkVOZKPBlGXjSRRxlZeQqmVqaMHA5rmocvTJHyI'

export const server_calls = {
        get: async () => {
        const response = await fetch(`/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },    
		delete: async (id:string) => {
        const response = await fetch(`/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
		update: async (id:string, data:any = {}) => {
        const response = await fetch(`/cars/${id}`, {
            method: 'POST', // PUT also works here
            headers: {
                'Content-Type:': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
		create: async (data:any = {}) => {
        const response = await fetch(`/cars`,{
            method: 'POST',
            headers: {
                'Content-Type:': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    }
}