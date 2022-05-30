import React , {useState , useEffect} from 'react'; 

const useFetch =  (url) =>{

    const [data , setData] = useState(null) 
    const [error, setError] = useState(null)
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>{setData(data)})
            .catch((err)=>{
                console.log(err)
            })
          
    })

    return [data , error , loading]
}

export default useFetch