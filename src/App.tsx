import {Button} from "./Button";

function App(){
  return(
    <div style={{padding:"20px", fontFamily:"sans-serif"}}>
      <h1>React+TypeScript 学習中</h1>
      <p>ここがメイン画面</p>

      <div style={{display:"flex",flexDirection:"column",gap:"15px",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <Button label="ログイン" />
        <Button label="アカウント登録" />
        <Button label="キャンセル" />
      </div>
    </div>
  );
}

export default App;