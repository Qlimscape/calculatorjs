//Main function. Only delegates and returns 
export default function calculate(operation) {

	const operationList = parse(operation);
	console.log(JSON.stringify(operationList));
}

// parse the operation into an array where operands and operators result in respective values
function parse(operation) {

	const operationList = [];
	// split by operators but keep them also => ()
	operationList.push(operation.split(/([()+x\-/s])/).filter(function (e) {
		return e !== "";
	}));

	return operationList;
}