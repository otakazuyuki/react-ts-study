import {useState} from "react";

export const NameForm=()=>{
    const [text,setText]=useState<string>("");

    const handleChange=(e:any)=>{
        setText(e.target.value);
    };

    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"}}>
            <h2>入力フォーム</h2>
            <input type="text" value={text} onChange={handleChange} style={{padding:"10px",fontSize:"16px",width:"250px"}} placeholder="ここに入力"/>
            <div style={{fontSize:"16px"}}>
                <strong>入力された文字：</strong> {text}
            </div>
        </div>
    );
};