var currentSandwich = [];
var currentSandwichBreadNum = -1;
var buttonWidthMax = 3;


var currentSandwichCost = 0, currentSandwichEarn = 0, currentSandwichLook = 0, currentSandwichTaste = 0 ,currentSandwichSmell = 0, currentSandwichHealth = 0, currentSandwichFilling = 0, currentSandwichTotal = 0, currentSandwichkcal = 0, currentSandwichSkill = 0;
var filter = [];
function displayStats(){
	var output = "";
	
	output += "Cost to Make: " + currentSandwichCost + "<br> Net Gain: " + currentSandwichEarn + "<br>Skill Required: " + currentSandwichSkill;
	output += "<br><br> Look: " + currentSandwichLook + "<br> Taste: " + currentSandwichTaste + "<br> Smell: " + currentSandwichSmell;
	output += "<br> Health: " + currentSandwichHealth + "<br> Filling: " + currentSandwichFilling + "<br> Total: " + currentSandwichTotal;
	output += "<br><br> KCal: " + currentSandwichkcal + "<br> Bread Type: ";
	if(currentSandwichBreadNum > -1){ output += bread[currentSandwichBreadNum][0]; } 
	document.getElementById("cost").innerHTML = output;
}

//Calculates sandwich
function displaySandwich(arr){
	currentSandwichCost = 0, currentSandwichEarn = 0, currentSandwichLook = 0, currentSandwichTaste = 0 ,currentSandwichSmell = 0, currentSandwichHealth = 0, currentSandwichFilling = 0, currentSandwichTotal = 0, currentSandwichkcal = 0, currentSandwichSkill = 0;
	var SandwichText = "";
	var whiteSpace = 10 - arr.length;//name, cost, look, taste, smell, health, filling, total, kcal
	if(currentSandwichBreadNum != -1){
		currentSandwichCost += bread[currentSandwichBreadNum][1];
		currentSandwichLook += bread[currentSandwichBreadNum][2];
		currentSandwichTaste += bread[currentSandwichBreadNum][3];
		currentSandwichSmell += bread[currentSandwichBreadNum][4];
		currentSandwichHealth += bread[currentSandwichBreadNum][5];
		currentSandwichFilling += bread[currentSandwichBreadNum][6];
		currentSandwichTotal += bread[currentSandwichBreadNum][7];
		currentSandwichkcal += bread[currentSandwichBreadNum][8];
	}
	for(var i = 0; i<arr.length; i++){
		SandwichText += arr[i] + "<br>";
		currentSandwichCost += listOfIngredients[getNumber(arr[i])].cost;
		currentSandwichEarn += listOfIngredients[getNumber(arr[i])].earning;
		currentSandwichSkill += listOfIngredients[getNumber(arr[i])].skill;
		currentSandwichLook += listOfIngredients[getNumber(arr[i])].look;
		currentSandwichTaste += listOfIngredients[getNumber(arr[i])].taste;
		currentSandwichSmell += listOfIngredients[getNumber(arr[i])].smell;
		currentSandwichHealth += listOfIngredients[getNumber(arr[i])].health;
		currentSandwichFilling += listOfIngredients[getNumber(arr[i])].filling;
		currentSandwichTotal += listOfIngredients[getNumber(arr[i])].total;
		currentSandwichkcal += listOfIngredients[getNumber(arr[i])].kcal;
	}
	for(var i = 0; i<whiteSpace; i++){
		SandwichText += "<br>";
	}
	document.getElementById("output").innerHTML = SandwichText;
	
	//Stats Display for the Current Sandwich
	displayStats();
}

//Choose Ingredient
function displayAvailableChoices(choice, addToList){

	var bestChoiceOutput = "",normalChoiceOutput = "",badChoiceOutput = "";
	if(choice != -1 && addToList) currentSandwich.push(choice);
	displaySandwich(currentSandwich);
	
	var bestButtonCurrentWidth = 0,normalButtonCurrentWidth = 0,badButtonCurrentWidth = 0;

	var choiceNum = getNumber(choice);
	for(var i = 0; i<listOfIngredients.length-1; i++){
		if( choice == -1 || compareNums(choiceNum,i) == 1 ){
			bestChoiceOutput += "<button class='selectButtonBig' onclick=\"displayAvailableChoices('" + listOfIngredients[i].name + "',true)\">" + listOfIngredients[i].name + "; cost = " + listOfIngredients[i].cost + "; Earn = " + listOfIngredients[i].earning + "</button>";
	        bestButtonCurrentWidth++;
			if(bestButtonCurrentWidth >= buttonWidthMax){ bestChoiceOutput += "<br>";bestButtonCurrentWidth = 0;}
		}else if(compareNums(choiceNum,i) == 0 ){
			normalChoiceOutput += "<button class='selectButtonMed'  onclick=\"displayAvailableChoices('" + listOfIngredients[i].name + "',true)\">" + listOfIngredients[i].name + " cost = " + listOfIngredients[i].cost + "</button>";
	        normalButtonCurrentWidth++;
			if(normalButtonCurrentWidth >= buttonWidthMax){ normalChoiceOutput += "<br>";normalButtonCurrentWidth = 0;}
		}else if(compareNums(choiceNum,i) == -1 ){	
			badChoiceOutput += "<button class='selectButtonSmall'  onclick=\"displayAvailableChoices('" + listOfIngredients[i].name + "',true)\">" + listOfIngredients[i].name + " cost = " + listOfIngredients[i].cost + "</button>";
	        badButtonCurrentWidth++;
			if(badButtonCurrentWidth >= buttonWidthMax){ badChoiceOutput += "<br>";badButtonCurrentWidth = 0;}
		}
	 }
	document.getElementById("goodchoices").innerHTML = bestChoiceOutput;
	document.getElementById("normalchoices").innerHTML = normalChoiceOutput;
	document.getElementById("badchoices").innerHTML = badChoiceOutput;
}


function removeFilter(word){
	filter.push(word);
}
function addToFilter(word){
	filter.push(word);
}
function hasFilterOn(word){
	for(var i =0; i < filter.length - 1; i++){
		if(filter[i].localeCompare(word) == 0)
			return i;
	}
	return -1;
	
}

 function resetChoices
	//currentSandwichBreadNum = -1;
	currentSandwich = [];
	displaySandwich(currentSandwich);
	displayNoSelectedChoices();
 }
 

 //Choose Bread
function setBread(num){
	currentSandwichBreadNum = num;
	showLastChoice();
}
function showBreadList(){
	displayStats();
	var breadButtonOutput = "";
    var BreadButtonCurrentWidth = 0;
	for(var i = 0; i<bread.length-1; i++){
		breadButtonOutput += "<button class='selectButtonBig' onclick=\"setBread(" + i + ")\">" + bread[i][0] + "; cost = " + bread[i][1] + "</button>";BreadButtonCurrentWidth++;
		if(breadButtonOutput >= buttonWidthMax+1){ breadButtonOutput += "<br>";bestButtonCurrentWidth = 0;}
		
	}	      
	document.getElementById("goodchoices").innerHTML = breadButtonOutput;  
	document.getElementById("normalchoices").innerHTML = "";
	document.getElementById("badchoices").innerHTML = "";
}
//starts showing the 
showBreadList();
var SandwichText = "";
for(var i = 0; i<10; i++){
	SandwichText += "<br>";
}
document.getElementById("output").innerHTML = SandwichText;