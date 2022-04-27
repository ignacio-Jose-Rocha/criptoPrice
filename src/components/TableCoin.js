import React from 'react';
import CoinRow from "./coinRow";

const title=["#","coin","price","price change","24hs volume"]

const TableCoin =({coins,search})=>{
    const mopedsFiltrated = coins.filter((coin)=>
        coin.name.toLowerCase().includes(search.toLowerCase()));
    if(!coins) return <div> no hay monedas</div>
    return(
        <table className="table table-black mt-4 table-hover">
            <thead>
               <tr>
                   {
                       title.map((title,i)=>(
                       <td key={i}>{title}</td>
                       ))}
               </tr>
            </thead>
            <tbody>
            {mopedsFiltrated.map((coin,index)=>(
                <CoinRow key={coin.id} coin={coin}  index={index+1}/>
            ))}
            </tbody>
        </table>
        )
}

export default TableCoin;