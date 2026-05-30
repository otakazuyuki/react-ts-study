interface ButtonProps{
    label:string;
}

export const Button=(props:ButtonProps)=>{
    return(
        <button style={{padding:"10px 20px",color:"blue"}}>
            {props.label}
        </button>
    );
};