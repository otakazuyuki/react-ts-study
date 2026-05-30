import {useState} from "react";

export const TodoList=()=>{
    const[todos,setTodos]=useState<string[]>(["reactの勉強","買い出しに行く"]);

    const [inputText,setInputText]=useState<string>("");

    const handleAdd=()=>{
        if(inputText===""){
            return;
        }
        setTodos([...todos,inputText]);
        setInputText("");
    }

    return(
        <div style={{padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "300px"}}>
            <h2>Todoリスト</h2>
            <div style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
                <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder="新しいタスクを入力" style={{padding:"8px",flex:1}} />
                <button onClick={handleAdd} style={{padding: "8px 12px", cursor: "pointer"}}>追加</button>
            </div>
            <ul style={{paddingLeft:"20px",textAlign:"left"}}>
                {todos.map((todo,index)=>(
                    <li key={index} style={{marginBottom:"8px",fontSize:"16px"}}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};