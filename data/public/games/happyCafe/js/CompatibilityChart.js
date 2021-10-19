var compatibility =[
  [0,1,1,1,1,-1,1,-1,1,0,-1,-1,0,1,0,1,0,-1,0,1,0,1,0,0,1,0,1,0,0,-1,1,1,1,0,0,1,-1,-1,0,0],
  [1,0,1,1,1,1,0,0,1,0,0,1,1,0,-1,0,0,0,-1,-1,1,0,1,0,-1,0,0,0,0,0,1,0,0,0,-1,0,-1,0,1,-1],
  [1,1,0,0,1,1,0,-1,0,-1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,-1,1,-1,1,1,1,0,-1,-1,0,-1,0,1,-1,-1,1],
  [1,1,0,0,0,1,0,1,-1,1,1,0,-1,0,0,0,1,1,0,0,0,0,1,1,1,-1,-1,0,0,0,1,0,0,1,0,0,-1,0,1,-1],
  [1,1,1,0,0,0,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,0,-1,0,0,0,0,-1,0,0,-1,0,0,-1,1,-1,1,0,-1,1,0],
  [-1,1,1,1,0,0,1,0,0,-1,-1,0,1,1,0,1,1,0,-1,1,0,0,1,1,0,0,0,1,-1,0,0,-1,0,1,-1,1,0,-1,0,-1],
  [1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,-1,0,0,0,0,1,1,1,1,1,-1,0,-1,0,-1,0,1,-1,0],
  [-1,0,-1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,-1,0,-1,1,-1,1,1,0,0,-1,0,1,-1,1,1,-1,1,-1,1,1,-1,0,-1],
  [1,1,0,-1,1,0,0,1,0,0,0,1,1,-1,1,0,0,0,-1,-1,0,1,1,1,1,0,1,0,0,1,1,1,0,-1,0,1,0,1,1,0],
  [0,0,-1,1,1,-1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,-1,1,-1,0,-1,1,0,-1,0,0,0,0,-1,-1],
  [-1,0,0,1,1,-1,1,0,0,1,0,-1,1,0,0,0,1,-1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,-1,0,1,0,0,1,0],
  [-1,1,1,0,1,0,0,0,1,1,-1,0,0,1,0,0,0,1,0,-1,-1,-1,0,1,1,0,0,-1,1,1,1,0,-1,1,-1,-1,0,-1,0,0],
  [0,1,1,-1,1,1,0,0,1,0,1,0,0,1,1,0,1,-1,0,1,1,0,1,0,0,0,0,-1,0,0,0,1,-1,1,1,-1,0,0,1,0],
  [1,0,0,0,-1,1,0,0,-1,1,0,1,1,0,0,0,0,1,-1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,-1,-1,0,-1],
  [0,-1,0,0,-1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,-1,1,0,0,-1,-1,1,0,-1,0,1,-1,1,-1,1,1,0,0,0],
  [1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,-1,-1,1,0,1,1,-1,1,-1,0,0,-1,-1,0,1,-1,0,0,1,0,-1,0,1,-1],
  [0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,-1,0,1,0,-1,1,1,1,0,0,0,1,-1,0,0,1,-1,0,0,0,1,0,0,1,-1],
  [-1,0,1,1,0,0,0,-1,0,1,-1,1,-1,1,0,-1,1,0,-1,0,0,-1,0,0,1,1,1,0,0,1,0,0,-1,0,1,0,0,-1,1,-1],
  [0,-1,0,0,0,-1,1,0,-1,1,0,0,0,-1,1,1,0,-1,0,0,0,1,0,-1,0,0,1,1,-1,1,-1,-1,1,0,0,0,0,1,0,0],
  [1,-1,0,0,1,1,1,-1,-1,0,0,-1,1,0,0,0,-1,0,0,0,0,0,-1,-1,0,0,0,-1,-1,0,0,1,1,1,-1,1,1,0,0,0],
  [0,1,1,0,0,0,0,1,0,0,0,-1,1,0,0,1,1,0,0,0,0,-1,1,0,-1,0,-1,0,-1,0,0,1,-1,0,-1,-1,1,0,0,0],
  [1,0,0,0,-1,0,-1,-1,1,0,0,-1,0,0,-1,1,1,-1,1,0,-1,0,0,0,-1,0,-1,0,1,-1,0,1,-1,0,-1,0,1,-1,0,1],
  [0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,-1,1,0,0,-1,1,0,0,0,0,0,0,1,-1,-1,1,1,0,0,-1,1,-1,0,-1,0],
  [0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,-1,-1,0,0,0,0,0,1,0,1,-1,1,-1,-1,0,-1,1,0,-1,0,-1,0],
  [1,-1,-1,1,0,0,0,0,1,1,0,1,0,1,0,-1,0,1,0,0,-1,-1,0,0,0,1,-1,1,0,1,0,0,-1,1,-1,1,1,-1,1,-1],
  [0,0,1,-1,0,0,0,0,0,0,1,0,0,1,-1,0,0,1,0,0,0,0,0,1,1,0,0,0,-1,0,0,0,-1,1,-1,0,0,-1,0,0],
  [1,0,-1,-1,-1,0,1,-1,1,-1,0,0,0,1,-1,0,1,1,1,0,-1,-1,0,0,-1,0,0,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0],
  [0,0,1,0,0,1,1,0,0,1,1,-1,-1,0,1,-1,-1,0,1,-1,0,0,1,1,1,0,0,0,1,0,1,-1,1,1,0,1,0,1,1,0],
  [0,0,1,0,0,-1,1,1,0,-1,0,1,0,0,0,-1,0,0,-1,-1,-1,1,-1,-1,0,-1,0,1,0,0,1,1,1,-1,0,0,0,0,1,1],
  [-1,0,1,0,-1,0,1,-1,1,0,0,1,0,1,-1,0,0,1,1,0,0,-1,-1,1,1,0,-1,0,0,0,0,0,-1,0,0,0,-1,0,0,0],
  [1,1,0,1,0,0,1,1,1,-1,1,1,0,0,0,1,1,0,-1,0,0,0,1,-1,0,0,0,1,1,0,0,-1,0,0,0,0,-1,0,-1,0],
  [1,0,-1,0,0,-1,-1,1,1,1,0,0,1,0,1,-1,-1,0,-1,1,1,1,1,-1,0,0,0,-1,1,0,-1,0,1,-1,0,-1,0,0,0,0],
  [1,0,-1,0,-1,0,0,-1,0,0,0,-1,-1,0,-1,0,0,-1,1,1,-1,-1,0,0,-1,-1,-1,1,1,-1,0,1,0,0,-1,0,1,-1,0,1],
  [0,0,0,1,1,1,-1,1,-1,-1,-1,1,1,0,1,0,0,0,0,1,0,0,0,-1,1,1,0,1,-1,0,0,-1,0,0,0,0,-1,0,-1,1],
  [0,-1,-1,0,-1,-1,0,-1,0,0,0,-1,1,1,-1,1,0,1,0,-1,-1,-1,-1,1,-1,-1,-1,0,0,0,0,0,-1,0,0,0,1,-1,0,1],
  [1,0,0,0,1,1,-1,1,1,0,1,-1,-1,1,1,0,1,0,0,1,-1,0,1,0,1,0,0,1,0,0,0,-1,0,0,0,0,1,0,1,0],
  [-1,-1,1,-1,0,0,0,1,0,0,0,0,0,-1,1,-1,0,0,0,1,1,1,-1,-1,1,0,0,0,0,-1,-1,0,1,-1,1,1,0,1,0,0],
  [-1,0,-1,0,-1,-1,1,-1,1,0,0,-1,0,-1,0,0,0,-1,1,0,0,-1,0,0,-1,-1,-1,1,0,0,0,0,-1,0,-1,0,1,0,0,-1],
  [0,1,-1,1,1,0,-1,0,1,-1,1,0,1,0,0,1,1,1,0,0,0,0,-1,-1,1,0,0,1,1,0,-1,0,0,-1,0,1,0,0,0,0],
  [0,-1,1,-1,0,-1,0,-1,0,-1,0,0,0,-1,0,-1,-1,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,0,1,1,1,0,0,-1,0,0]
]

function compare(Ingredient1, Ingredient2){
	return compatibility[Ingredient1.idNum][Ingredient2.idNum];
}
function compareNums(Ingredient1, Ingredient2){
	return compatibility[Ingredient1][Ingredient2];
}

function Ingredients(name, dataNum, look, taste, smell, health, filling, total, kcal, cost, earning, skill, type, color)
{
	this.name = name;
	this.idNum = dataNum;
	this.look = look;
	this.taste = taste;
	this.smell = smell;
	this.health = health;
	this.filling = filling;
	this.total = total;
	this.kcal = kcal;
	this.cost = cost;
	this.earning = earning;
	this.skill = skill;
	this.type = type;
	this.color = color;
}
var eggSalad = new Ingredients("Egg Salad",0,3,	2,	1,	1,	5,	2,	64,	6,	6,	1,	"other",	"yellow");
var cucumber = new Ingredients("Cucumber",1,2,	3,	2,	4,	2,	3,	2,4,	7,	2,	"vegetable",	"green");
var ham =  new Ingredients("Ham",2,2,	4,	4,	1,	2,	4,	37,	10,	9,	3,	"meat",	"red");
var lettuce =  new Ingredients("Lettuce",3,5, 2, 1, 5, 1, 4, 1, 15, 12, 4, "vegetable", "green");
var tuna =  new Ingredients("Tuna",4,1,	4,	3,	2,	2,	2,	73,	11,	19,	3,	"seafood",	"other");
var boiledEgg = new Ingredients("Boiled Egg",5,1,	3,	1,	1,	5,	2,	84,	7,	13,	5,	"other",	"yellow white");
var olive = new Ingredients("Olive",6,1,	3,	5,	3,	1,	3,	12,	10,	12,	4,	"other",	"other");
var salami = new Ingredients("Salami",7,1,	5,	2,	1,	3,	4,	71,	12,	10,	5,	"meat",	"red");
var sprouts = new Ingredients("Sprouts",8,1,	2,	3,	3,	1,	1,	5,	5,	10,	2,	"vegetable",	"green");
var tomato= new Ingredients("Tomato",9,3,	3,	3,	3,	2,	5,	6,	17,	20,	7,	"vegetable",	"red");
var sandine = new Ingredients("Sandine",10,3,	4,	2,	1,	4,	4,	92,	14,	5,	5,	"seafood",	"other");
var omelet = new Ingredients("Omelet",11, 4,	2,	1,	1,	6,	4,	96,	9,	16,	6,	"other",	"yellow");
var pickles = new Ingredients("Pickles",12,1,	2,	3,	3,	2,	1,	11,	7,	19,	3,	"vegetable",	"green");
var cheddarCheese = new Ingredients("Chedder Cheese",13,6,	2,	4,	1,	2,	5,	81,	14,	13,	6,	"other",	"yellow");
var pastrami = new Ingredients("Pastrami",14,4,	4,	4,	1,	2,	6,	129,	18,	7,	7,	"meat",	"red");
var basil = new Ingredients("Basil",15,3,	1,	5,	3,	2,	4,	1,	20,	34,	8,	"vegetable",	"green");
var onion= new Ingredients("Onion",16,1,	3,	4,	4,	1,	4,	3,	18,	23,	6,	"vegetable",	"white other");
var chiliBeans = new Ingredients("Chili Beans",17,3,4,	2,	1,	3,	4,	75, 13,	25,	7,	"other",	"red");
var CreamCheese = new Ingredients("Cream Cheese",18,1,	5,	3,	4,	2,	5,	69,	16,	24,	9,	"other",	"white");
var shrimp = new Ingredients("Shrimp",19,5,5,3,	1,	2,	6,	35, 22,	23,	8,	"seafood",	"red");
var smokedTurkeyBreast = new Ingredients("Smoked Turkey Breast",20,3,	1,	1,	5,	1,	2,	1,	5,	21,	4,	"vegetable",	"red white");
var smokedSalmon = new Ingredients("Smoked Salmon",21,3,	5,	4,	1,	4,	6,	73,	25,	16,	11,	"seafood",	"red");
var radish = new Ingredients("Radish",22,3,	1,	1,	5,	1,	2,	1,	5,	21,	4,	"vegetable",	"red white");
var swissCheese = new Ingredients("Swiss Cheese",23,3,	4,	3,	3,	3,	6,	64,	33,	26,	10,	"other"	,"yellow");
var bacon = new Ingredients("Bacon",24,2,	4,	4,	2,	2,	5,	147,	40,	18,	8,	"meat",	"red");
var grilledZucchini = new Ingredients("Grilled Zucchini",25,4,	4,	2,	2,	3,	5,	23,	9,	5,	6,	"vegetable",	"green");
var friedFish = new Ingredients("Fried Fish",26,3,	5,	2,	2,	5,	6,	183,	38,	28,	10,	"seafood",	"yellow");
var arugula= new Ingredients("Arugula",27,4,	1,	5,	2,	1,	3,	2,	7,	25,	6,	"vegetable",	"green");
var camembert = new Ingredients("Camembert",28,1,	4,	3,	2,	4,	5,	56,	23,	22,	7,	"other",	"white");
var bratwurst = new Ingredients("Bratwurst",29,3,	4,	4,	2,	3,	6,	156,	12,	26,	10,	"meat",	"red");
var bellPepper = new Ingredients("Bell Pepper",30,5,	1,	2,	4,	1,	4,	7,	12,	18,	6,	"vegetable",	"red yellow");
var avocado = new Ingredients("Avocado",31,2,	3,	2,	3,	3,	4,	28,	30,	43,	15,	"vegetable",	"green");
var prosciutto = new Ingredients("Prosciutto",32,3,	5,	4,	3,	3,	6,	49,	40,	19,	14,	"meat",	"red");
var mushroom= new Ingredients("Mushroom",33,1,	2,	6,	5,	2,	6,	3,	20,	22,	9,	"other",	"white");
var grilledChicken = new Ingredients("Grilled Chicken",34,3,	6,	3,	2,	4,	6,	161,	45,	14,	12,	"meat",	"other");
var romaine = new Ingredients("Romaine",35,3,	3,	2,	3,	2,	4,	1,	19	,22, 10, "vegetable",	"green");
var goatcheese= new Ingredients("Goat Cheese",36,3,	4,	4,	3,	3,	6,	56,	23,	20,	12,	"other",	"white"); 
var roastBeef= new Ingredients("Roast Beef",37,4,	6,	3,	3,	4,	6,	71,	50,	16,	15,	"meat",	"red");
var yellowTomato = new Ingredients("Yellow Tomato",38,2,	2,	2,	2,	2,	1,	5,	7,	8,	2,	"vegetable",	"yellow");
var truffle = new Ingredients("Truffle",39,4,	2,	6,	4,	2,	6,	16,	60,	6,	20,	"other",	"other");



var listOfIngredients = [eggSalad, cucumber, ham, lettuce, tuna, boiledEgg, olive, salami, sprouts, tomato, sandine, omelet, pickles, cheddarCheese , pastrami, basil, onion, chiliBeans, CreamCheese, shrimp, smokedTurkeyBreast, smokedSalmon, radish, swissCheese, bacon, grilledZucchini ,friedFish, arugula, camembert, bratwurst, bellPepper, avocado, prosciutto, mushroom, grilledChicken, romaine, goatcheese ,roastBeef, yellowTomato, truffle];
function getNumber(name){for(var i=0; i < listOfIngredients.length; i++){ if(listOfIngredients[i].name.localeCompare(name) == 0) return listOfIngredients[i].idNum}};


// ALL THINGS BREAD
//name, cost, look, taste, smell, health, filling, total, kcal
var bread = [
  ["White Bread",5,2,2,2,2,2,1,169],
  ["Homemade White Bread",10,2,2,2,3,3,2,154],
  ["Whole Grain Bread",15,3,2,2,4,2,3,146],
  ["Rye Bread",20,1,4,2,2,5,4,162],
  ["English Muffin",25,2,5,5,2,2,5,144],
  ["Sesame Bread",30,2,5,2,5,3,5,151],
  ["Bagel",35,4,3,2,2,6,6,212],
  ["Focaccia",35,5,3,6,2,2,6,182],
  ["Baguette",35,5,5,3,3,3,6,136],
  ["Croissant",30,2,5,5,2,2,5,192]
]



