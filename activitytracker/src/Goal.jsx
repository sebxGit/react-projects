import React from 'react'
import { useState } from 'react';
import './Goal.css'

const ShowBox = (props) => {
	if (props.show)
		return (<h5>input: {props.name} - {props.hrs}</h5>)
}

const Goal = () => {
	const [name, setName] = useState("");
	const [hrs, setHrs] = useState("");
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(current => !current);
	}

	return (
		<form>
			<label>goal <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>
			<label>hrs/wk <input type="text" value={hrs} onChange={(e) => setHrs(e.target.value)}/></label>
			
			<i class="arrow down" onClick={e => {
				toggleShow(); 
				e.target.className = (e.target.className === "arrow down") ? "arrow up" : "arrow down";
				}}></i>
				
			<ShowBox name={name} hrs={hrs} show={show}/>
			
		</form>
	)
}

export default Goal