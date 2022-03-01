let result=0;
const resDisplay = document.getElementById("res");
const opDisplay = document.getElementById("op");
const sumDisplay = document.getElementById("sum");
let dotFlag = true;

const setResult = () => {
	if(event.target.innerHTML === "." && dotFlag){
		resDisplay.innerHTML=0;
		resDisplay.innerHTML += event.target.innerHTML;
        sumDisplay.innerHTML=0;
        sumDisplay.innerHTML += event.target.innerHTML;
		dotFlag = false;
	} else if(event.target.innerHTML === "."){

	} else if(dotFlag){
        resDisplay.innerHTML=0;
		resDisplay.innerHTML = Number(resDisplay.innerHTML + event.target.innerHTML);
        sumDisplay.innerHTML +=  event.target.innerHTML;
        dotFlag = false;
	} else{
    resDisplay.innerHTML = Number(resDisplay.innerHTML + event.target.innerHTML);
    sumDisplay.innerHTML +=  event.target.innerHTML;
    }
    
};

const setOp = () => {
	dotFlag = true;
	result = calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML);
	resDisplay.innerHTML = result;
	opDisplay.innerHTML = event.target.innerHTML;
    sumDisplay.innerHTML += event.target.innerHTML;
};

const setTotal = () => {
	resDisplay.innerHTML = calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML);
	dotFlag = true;
	opDisplay.innerHTML = "";
	result = 0;
};

const delDigit = () => {
	resDisplay.innerHTML = resDisplay.innerHTML.length === 1? 0 : strRemoveLastChar(resDisplay.innerHTML);
	sumDisplay.innerHTML = sumDisplay.innerHTML.length === 1? 0 : strRemoveLastChar(sumDisplay.innerHTML);
};

const resetNumber = () => {
	resDisplay.innerHTML = 0;
	dotFlag = true;
};

const resetCalc = () => {
	resDisplay.innerHTML = 0;
	sumDisplay.innerHTML = 0;
	opDisplay.innerHTML = "";
	result = 0;
	dotFlag = true;
};


const strRemoveLastChar = (str) => {
	str = str.substring(0, str.length-1);
	return str;
};

const calc = (a,b,op) => {
	let t;
	switch(op){
		case "+":
			t = a + b;
			break;
		case "-":
			t = a - b;
			break;
		case "*":
			t = a * b;
			break;
		case "/":
			 t = b === 0? 0 : a / b;
			break;
		default:
			t = b;
	}
	return t;
}