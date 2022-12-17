import { useEffect, useState } from 'react'
import instance from './AxiosInstance'

function ReligionComponent() {
    const [data, setData] = useState([])

    useEffect(() => {
        instance.get('v1/religions')
         .then(res => setData(res.data.data))
         .catch(err => console.log(err))
    }, [])

    return (
        <>
            { data?.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
            )) }
        </>
    )
}

export default ReligionComponent