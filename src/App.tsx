import {Button} from "./Button";
import {Counter} from "./Counter";
import {NameForm} from "./NameForm";

function App(){
  return(
    <div style={{padding:"20px", fontFamily:"sans-serif"}}>
      <h1>React+TypeScript 学習中</h1>
      <p>ここがメイン画面</p>

      <div style={{display:"flex",flexDirection:"column",gap:"15px",alignItems:"center",justifyContent:"center"}}>
        <Button label="ログイン" />
        <Button label="アカウント登録" />
        <Button label="キャンセル" />
      </div>
      <Counter />
      <NameForm />
      <hr style={{border:"0.5px solid #eee",width:"100%"}} />
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:"10px"}}>
        <Button label="保存する" />
        <Button label="キャンセル" />
      </div>
    </div>
  );
}

export default App;