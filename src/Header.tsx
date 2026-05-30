type HeaderProps={
    userName:string;
};

export const Header=({userName}:HeaderProps)=>{
    return(
        <header style={{width:"100%",padding:"15px 30px",backgroundColor:"#333",color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",boxSizing:"border-box"}}>
            <span style={{fontWeight:"bold",fontSize:"18px"}}>マイアプリ</span>
        </header>
    );
};