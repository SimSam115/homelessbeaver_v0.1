	
function displayStats(){
	var output = "";
	
	output += "Cost to Make: " + currentSandwichCost + "<br> Net Gain: " + currentSandwichEarn + "<br>Skill Required: " + currentSandwichSkill;
	output += "<br><br> Look: " + currentSandwichLook + "<br> Taste: " + currentSandwichTaste + "<br> Smell: " + currentSandwichSmell;
	output += "<br> Health: " + currentSandwichHealth + "<br> Filling: " + currentSandwichFilling + "<br> Total: " + currentSandwichTotal;
	output += "<br><br> KCal: " + currentSandwichkcal + "<br> Bread Type: ";
	if(currentSandwichBreadNum > -1){ output += bread[currentSandwichBreadNum][0];}
	document.getElementById("cost").innerHTML = output;
}

function displayNoSelectedChoices() {
	displayAvailableChoices(-1,false);
}
function showLastChoice(){
	if(currentSandwich.length == 0)
		displayNoSelectedChoices();
	else 
		displayAvailableChoices(currentSandwich[currentSandwich.length-1],false);	
}
 function backChoice(){
	 if(currentSandwich.length > 0){
	 
		currentSandwich.pop();
		showLastChoice();
	 }
 }

