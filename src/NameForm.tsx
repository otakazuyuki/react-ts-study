type NameFormProps={
    userName:string;
    onNameChange:(value:string)=>void;
};

export const NameForm=({userName,onNameChange}:NameFormProps)=>{
    const handleChange=(e:any)=>{
        onNameChange(e.target.value);
    };

    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"}}>
            <h2>入力フォーム</h2>
            <input type="text" value={userName} onChange={handleChange} style={{padding:"10px",fontSize:"16px",width:"250px"}} placeholder="ここに入力"/>
            <div style={{fontSize:"16px"}}>
                <strong>入力された文字：</strong> {userName}
            </div>
        </div>
    );
};