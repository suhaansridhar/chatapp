import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

export default function SignUpFire(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignup(e){
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successful");
        }catch(error){
            console.log(error.message);
            alert(error.message);
        }
    }

    return(
        <div className="sign--up--fire">
            <form onSubmit={handleSignup}>
            <input 
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                />
            
            <input 
                type="password" 
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}