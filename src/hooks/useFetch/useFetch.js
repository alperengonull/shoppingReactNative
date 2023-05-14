import { useEffect,useState } from "react";
import axios from "axios";

  function useFetch(url){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
  
    //   Ürünleri görüntülemek için axios ile API_URL yardımıyla çekiyoruz.
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (error) {
        setError(error.message)
        setLoading(false);
    }
  };


    useEffect(()=>{
        fetchData();
    },[])

    console.log('Data:', data);

    return (error,loading,data);
  }


  export default useFetch;