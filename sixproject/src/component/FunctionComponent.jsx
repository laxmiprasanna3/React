import React, {useState} from "react";
function FunctionComponent({name, fname, height, setName}){
    const[count, setCount] = useState(0);

    const [changeName, setChangeName] = useState("");

    const subtractCountBy1=()=>{
        setCount(count-1)
    }

    //2 nd approach
    //const {name, fname, height, setName} = props

    return(
        <div>
            <p>This is functional Component</p>
            <button onClick={() => setCount(count+1)}>clk on me to increment the count by 1</button>
            <button onClick={subtractCountBy1}>clk on me to decrement the count by 1</button>
            <h1>{count}</h1>
            <h4>fname is: {fname}  name is: {name} height is: {height}</h4>
            <input type="text" onChange={(e)=> setChangeName(e.target.value)}></input>
            <button onClick={()=>setName(changeName)}>Change name to kitty</button>
        </div>
    )
}
export default FunctionComponent;