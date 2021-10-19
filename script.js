let money = 0
document.querySelector(".plus_hard").disabled = true;
document.querySelector(".plus_hard").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,10000);
		let n2 =getRandomInt(1,10000);
		let correctAnswer = n1+n2
		let userAnswer = prompt(n1+"+"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>12) {
		document.querySelector(".plus_hard").disabled = false;
	}
}
document.querySelector(".plus_norm").disabled = true;
document.querySelector(".plus_norm").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,1000);
		let n2 =getRandomInt(1,1000);
		let correctAnswer = n1+n2
		let userAnswer = prompt(n1+"+"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>9) {
		document.querySelector(".plus_norm").disabled = false;
	}
	if (money>12) {
		document.querySelector(".plus_hard").disabled = false;
	}
}
document.querySelector(".plus").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,100);
		let n2 =getRandomInt(1,100);
		let correctAnswer = n1+n2
		let userAnswer = prompt(n1+"+"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>6) {
		document.querySelector(".plus_norm").disabled = false;
	}
}
document.querySelector(".minus_hard").disabled = true;
document.querySelector(".minus_hard").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(100,10000);
		let n2 =getRandomInt(1,100);
		let correctAnswer = n1+n2
		let userAnswer = prompt(n1+"+"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>12) {
	
		document.querySelector(".minus_hard").disabled = false;
	}
}
document.querySelector(".minus_norm").disabled = true;
document.querySelector(".minus_norm").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(50,100);
		let n2 =getRandomInt(1,50);
		let correctAnswer = n1-n2
		let userAnswer = prompt(n1+"-"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>9) {
		document.querySelector(".minus_norm").disabled = false;
	}
}
document.querySelector(".minus").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(50,100);
		let n2 =getRandomInt(1,50);
		let correctAnswer = n1-n2
		let userAnswer = prompt(n1+"-"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>6) {
		document.querySelector(".minus_norm").disabled = false;
	}
}	
document.querySelector(".umn_hard").disabled = true;
document.querySelector(".umn_hard").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,10000);
		let n2 =getRandomInt(1,10000);
		let correctAnswer = n1+n2
		let userAnswer = prompt(n1+"+"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>12) {
		document.querySelector(".umn_hard").disabled = false;
	}
}
document.querySelector(".umn_norm").disabled = true;
document.querySelector(".umn_norm").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,30);
		let n2 =getRandomInt(1,10);
		let correctAnswer = n1*n2
		let userAnswer = prompt(n1+"*"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>9) {
		document.querySelector(".umn_norm").disabled = false;
	}
}
document.querySelector(".umn").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,30);
		let n2 =getRandomInt(1,10);
		let correctAnswer = n1*n2
		let userAnswer = prompt(n1+"*"+n2+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>6) {
		document.querySelector(".umn_norm").disabled = false;
	}
}	
document.querySelector(".tes").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(1,20);
		let n2 =getRandomInt(1,10);
		let n3 =getRandomInt(1,10);
		let n4 =getRandomInt(1,20);
		let correctAnswer = n1+n2*n3-n4
		let userAnswer = prompt(n1+"+"+n2+"*"+n3+"-"+n4+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>9) {
		document.querySelector(".tes_norm").disabled = false;
	}
}	
document.querySelector(".tes_norm").disabled = true;
document.querySelector(".tes_norm").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(30,50);
		let n2 =getRandomInt(5,15);
		let n3 =getRandomInt(5,15);
		let n4 =getRandomInt(30,50);
		let correctAnswer = n1+n2*n3-n4
		let userAnswer = prompt(n1+"+"+n2+"*"+n3+"-"+n4+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
	if (money>12) {
		document.querySelector(".tes_hard").disabled = false;
	}
}
document.querySelector(".tes_hard").disabled = true;	 
document.querySelector(".tes_hard").onclick = function () {
	for (let i=0;i<3;i++) {
		let n1 =getRandomInt(30,50);
		let n2 =getRandomInt(5,15);
		let n3 =getRandomInt(5,15);
		let n4 =getRandomInt(30,50);
		let correctAnswer = n1+n2*n3-n4
		let userAnswer = prompt(n1+"+"+n2+"*"+n3+"-"+n4+"=","");
		if (correctAnswer==userAnswer) {
			alert("good")
			money = money+1
			document.querySelector(".money").innerHTML = money;
		}
		else {
			alert("bad")
			money = money-1
			document.querySelector(".money").innerHTML = money;
		}
	}
}	
function getRandomInt(min,max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}