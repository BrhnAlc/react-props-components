

import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Form from "./components/form/Form";
import Input from "./components/input/Input";


function App() {
   const [ user, setUser] = useState({name:"", password:""})
  
   const handleChange=(e)=>{
   if(e.target.type==="text"){
    setUser({...user, name:e.target.value})
    console.log(user);
   }else if(e.target.type==="password"){
    setUser({...user, password:e.target.value})
    console.log(user);
   }
    
   }
   const handleClick=()=>{
    if(user.name===""){
      alert("Kullanıcı adı boş geçilemez");
    }
   }

  return (
    <div className="app text-center">
      <h2 className="mt-5">Giriş Formu</h2>
      
      <Form>
      <Input type={"text"} placeHolder={"Kullanıcı Adı"} onChange={handleChange} value={user.name} />
      <Input type={"password"} placeHolder={"Kullanıcı Şifre"} value={user.password}/>
      <Button  onClick={handleClick}
    />
      </Form>
    </div>
  )
}

export default App
