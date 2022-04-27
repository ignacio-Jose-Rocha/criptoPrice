import './App.css';
import axios from 'axios';
import {useEffect,useState} from "react";
import TableCoin from './components/TableCoin';

function App() {
    const [coins,setCoins]=useState([]);
    const [search,setSearch]=useState("");
    const getData=async()=>{
        try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
            setCoins(res.data);
            console.log(res.data);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getData();
        },[]);
  return (
    <div className="container">
        <div className="row">
            <input type="text"
                   placeholder="buscar una moneda"
                   className="form-control bg-dark text-light border-0 mt-4 text-center"
                   autoFocus
            onChange={ (e)=>setSearch(e.target.value)}/>

            <TableCoin coins={coins} search={search}/>
        </div>
    </div>
  );
}

export default App;
