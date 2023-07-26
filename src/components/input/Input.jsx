

import "./Input.css";

const Input =({type , placeHolder,onChange})=>{

   

    return(


    <input className="input" type={type} placeHolder={placeHolder} onChange={onChange} />

    )
}

export default Input;