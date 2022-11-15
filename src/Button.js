export default function Button(props) {
const handleClick = () => {
	props.handleClick(props.value)
	// alert("Hello")
}
	return(
		<div>
			<button onClick={() => handleClick()}>
				{props.value}
			</button>
		</div>
	)
}