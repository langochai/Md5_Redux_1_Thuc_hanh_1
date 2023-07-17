import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Login(){
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user,setUser] = useState({
		username:"",
		password:""
	});
	const userlogined = useSelector(state => state.userlogined);
	const setValue = (key,value) =>{
		setUser({...user,[key]:value})
	};
	const login = () =>{
		dispatch({type:"LOGIN",payload: user})
	};
	useEffect(()=>{
		if(userlogined.username){
			navigate("/user")
		}
	},[userlogined,navigate]);
	return(
		<>
			<form>
				<label>User name</label>
				<input
					name="username"
					onChange={e => setValue(e.target.name, e.target.value)}
					type="text"
				/>
				<br/>
				<label>Password</label>
				<input
					name="password"
					onChange={e => setValue(e.target.name, e.target.value)}
					type="password"
				/>
				<br/>
				<button
					type="button"
					onClick={() => {
						login();
					}}
				>
					Login
				</button>
			</form>
		</>
	)
}