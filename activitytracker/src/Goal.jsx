import React from 'react'
import { useState } from 'react';
import './Goal.css'
import Module from './Module';

const Goal = () => {
	const [name, setName] = useState("");
	const [hrs, setHrs] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		const goals = document.getElementsByName("goals");
		goals.render(<Module name="newGoal"/>)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>goal 
				<input type="text" value={name} required onChange={(e) => setName(e.target.value)}
				class="shadow border rounded py-2 px-2 text-gray-700 h-10 m-2"/>
			</label>
			<label>hrs/wk 
				<input type="number" value={hrs} required onWheel={(e) => e.target.blur()} onChange={(e) => setHrs(e.target.value)}
				class="shadow border rounded py-2 px-2 text-gray-700 h-10 w-10 m-2"/>
			</label>
			<button class="shadow border rounded py-2 px-2 bg-amber-500">Button</button>
			<input type="submit" hidden />
		</form>
	)
}

export default Goal