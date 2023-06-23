import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
import Goal from './Goal'
import Module from './Module'
import Button from './Button'

const App = () => {
	return (
		<div class="p-10">
			<Welcome name="Seb"/>
			<Button/>
			<Goal/>
			<Module name="goal"/>
		</div>
	)
}

export default App