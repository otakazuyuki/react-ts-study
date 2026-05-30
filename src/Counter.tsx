import{useState} from "react";

export const NameForm=()=>{
    const[count,setCount]=useState<number>(0);

    const handleClick=()=>{
        setCount(count+1);
    };

    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",padding:"40px"}}>
            <h1>カウンター</h1>
            <p style={{fontSize:"48px",fontWeight:"bold",margin:0}}>{count}</p>
            <button onClick={handleClick} style={{padding:"10px 30px",fontSize:"18px",cursor:"pointer"}}>カウントアップ!</button>
        </div>
    );
};