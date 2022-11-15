import { useState } from "react"
import Button from "./Button"

export default function Calculator() {
	const [operation, setOperation] = useState('0')

	return (
		<div className="calculator">
				<input type="textarea" className="display" value={operation}/>
				<div className="buttons">
					<Button value="AC"/>
					<Button value="()"/>
					<Button value="s"/>
					<Button value="/"/>
					<Button value="7"/>
					<Button value="8"/>
					<Button value="9"/>
					<Button value="x"/>
					<Button value="4"/>
					<Button value="5"/>
					<Button value="6"/>
					<Button value="-"/>
					<Button value="1"/>
					<Button value="2"/>
					<Button value="3"/>
					<Button value="+"/>
					<Button value="0"/>
					<Button value="."/>
					<Button value="<"/>
					<Button value="="/>
				</div>

		</div>
	)
}