import { useEffect, useState } from "react"
import Button from "./Button"
import calculate from "./calculate"

export default function Calculator() {

	const [operation, setOperation] = useState('0')
	const [open, setOpen] = useState(false)
	const [displaySize, setDisplaySize] = useState("6rem")

	const addToOperation = (value) => {
		if (operation.charAt(0) === '0' && operation.charAt(1) !== "." && value !== ".") {
			setOperation(operation.substring(1) + value) // remove leading 0
		} else {
			setOperation(operation + value)
		}
	}
	const removeFromOperation = () => {
		if (operation.length === 1) {
			resetOperation() // last char is very last, so reset to 0
		} else {
			setOperation(operation.slice(0, -1)) // remove last char from string
		}
	}
	const resetOperation = () => {
		setOperation('0')
	}
	const paranthesis = () => {
		
		if (open) {
			setOperation(operation + ")")
			setOpen(false)
		} else {
			if (operation.charAt(0) === '0') {
				setOperation(operation.substring(1) + "(")
				setOpen(true)
			} else {
				setOperation(operation + "(")
				setOpen(true)
			}
		}
	}
	useEffect(() => {
		if (operation.length <= 6) {
			setDisplaySize("6rem")
		} else if (operation.length > 6 && operation.length <= 11) {
			setDisplaySize("4rem")
		} else if (operation.length > 11 && operation.length <= 23) {
			setDisplaySize("2rem")
		} else if (operation.length > 23 && operation.length <= 30) {
			setDisplaySize("1.5rem")
		} else if (operation.length > 30 && operation.length <= 40) {
			setDisplaySize("1rem")
		}
	}, [operation.length])

	const handleKeys = (key) => {

		if (key === "Backspace") {
			removeFromOperation()
		}
		if (/[0-9]/.test(key)) {
			addToOperation(key)
		}
		if (key === "s") {
			addToOperation(key)
		}
		if (/[+\-/.]/.test(key)) {
			addToOperation(key)
		}
		if (key === "*") {
			addToOperation("x")
		}
		if (key === "(" || key === ")") {
			paranthesis(key)
		}
		if (key === "Enter") {
			handleCalculate()
		}

	}


	function handleCalculate() {
		calculate(operation)
	}



	return (
		<div className="mainapp" tabIndex={"-1"} onKeyDown={(e) => handleKeys(e.key)}>
			<div>
				<h1>
					Calculator
				</h1>
			</div>
			<div className="calculator">
				<input 
					type="textarea" 
					className="display" 
					value={operation}
					onKeyDown={(e) => handleKeys(e)}
					readOnly
					style={{fontSize: displaySize}}
				/>
				<div className="buttons">
					<Button value="AC" handleClick={() => resetOperation()}/>
					<Button value="()" handleClick={() => paranthesis() }/>
					<Button value="s" handleClick={(value) => addToOperation(value)} />
					<Button value="/" handleClick={(value) => addToOperation(value)} />
					<Button value="7" handleClick={(value) => addToOperation(value)} />
					<Button value="8" handleClick={(value) => addToOperation(value)} />
					<Button value="9" handleClick={(value) => addToOperation(value)} />
					<Button value="x" handleClick={(value) => addToOperation(value)} />
					<Button value="4" handleClick={(value) => addToOperation(value)} />
					<Button value="5" handleClick={(value) => addToOperation(value)} />
					<Button value="6" handleClick={(value) => addToOperation(value)} />
					<Button value="-" handleClick={(value) => addToOperation(value)} />
					<Button value="1" handleClick={(value) => addToOperation(value)} />
					<Button value="2" handleClick={(value) => addToOperation(value)} />
					<Button value="3" handleClick={(value) => addToOperation(value)} />
					<Button value="+" handleClick={(value) => addToOperation(value)} />
					<Button value="0" handleClick={(value) => addToOperation(value)} />
					<Button value="." handleClick={(value) => addToOperation(value)} />
					<Button value="<" handleClick={() => removeFromOperation()} />
					<Button value="=" handleClick={() => handleCalculate()} />
				</div>

			</div>
		</div>
	)
}