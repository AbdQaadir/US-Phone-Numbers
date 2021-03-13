import{useState} from 'react'

import './Header.css'
const Header = ({handleSubmit}) => {
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");

    const submitNumber = () => {
        if(number && number.length === 10){
            handleSubmit(number);
            setNumber("");
        }else{
            setError("Entry should be of 10 characters")
            setTimeout(() => setError(""), 3000);
        }
        
    }
    return (
        <div id="header">
            <input value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={submitNumber}>Add</button>
            <p>{error}</p>
        </div>
    )
}

export default Header
