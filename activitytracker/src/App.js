import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
import Goal from './Goal'

const App = () => {
	return (
		<div>
			<Welcome name="Seb"/>
			<Goal/>
		</div>
	)
}

export default App