import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
    const [obj, setObj] = useState({
        fname: '', lname: '', age: 0, sex: '', number: 0
    });
    const navigate = useNavigate();

    function handleChange(e){
        const {name, value} = e.target;
        setObj(prevObj => ({...prevObj, [name] : value}));
    }

    function handleForm(){
        navigate('/');
    }

    return(
        <form action={handleForm} className="signup--container">
            <div className="signup--container--elements">
                <div className="signup--items">
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder='Enter your first name'
                        onChange={handleChange}
                        value={obj.fname}
                        name='fname'
                        />
                </div>
                <div className="signup--items">
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        placeholder='Enter your last name'
                        onChange={handleChange}
                        value={obj.lname}
                        name='lname'
                        />
                </div>
                <div className="signup--items">
                    <label>Age:</label>
                    <input 
                        type="number" 
                        onChange={handleChange}
                        value={obj.age}
                        name='age'
                        />
                </div>
                <div className="signup--items">
                    <label>Sex : </label>
                    <input 
                        type="text" 
                        placeholder='Enter your sex'
                        value={obj.sex}
                        name='sex'
                        onChange={handleChange}
                        />
                </div>
                <div className="signup--items">
                    <label>Enter your phone number: </label>
                    <input 
                        type="number"
                        onChange={handleChange}
                        name='number'
                        value={obj.number}
                         />
                </div>
                
                <button 
                    type='submit' 
                    style={{textAlign: 'center', margin: 'auto'}}
                >Submit</button>
            </div>
        </form>
    )
}