import {Button} from "./Button";

function App(){
  return(
    <div style={{padding:"20px", fontFamily:"sans-serif"}}>
      <h1>React+TypeScript 学習中</h1>
      <p>ここがメイン画面</p>

      <div style={{marginTop:"20px"}}>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;