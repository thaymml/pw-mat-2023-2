import React from 'react'
import mtfetch from '../utils/myfetch'
import myfetch from '../utils/myfetch'
export default function CarList(){
    const [cars, setCars] = React.useState([])

    //useEffect com vetor de dependencias vazio é executado apenas
    // uma vez, na fase mount do ciclo de vida do componente
    React.useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        try {
            const result = await myfetch.get('cars')
            setCars(result)
        }
        catch(error){
            // Deu errado
            console.log(error)
            alert('ERRO: ' + error.message)
        }
    }

    return(
        <>
          <h1>Listagem de carros</h1>
          <p>{JSON.stringify(cars)}</p>
        </>
    )
}