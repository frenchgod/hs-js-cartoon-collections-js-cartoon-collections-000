function dwarfRollCall(dwarves) {
  	var dwarfString = ""
	for (var i = 0; i < dwarves.length; i++){
		dwarfString = dwarfString + (i + 1 + ". " + dwarves[i] + " ") 
	}

return dwarfString	
}

function summonCaptainPlanet(listOfPowers){
  var planetList = []
	for (var i = 0; i < listOfPowers.length ; i++) {
		 planetList.push(listOfPowers[i].toUpperCase() + "!")
	}	

return planetList
}

function longPlaneteerCalls(listOfPowers) {
  for (var i = 0; i < listOfPowers.length; i++){
		if (listOfPowers[i].length > 4){
			return true
		}
		
	}
	return false
}

function findTheCheese (shoppingCart) {
  for (var i = 0; i < shoppingCart.length; i++) {
		if (shoppingCart[i] === "gouda" || shoppingCart[i] === "cheddar" || shoppingCart[i] === "camembert")
			return (shoppingCart[i])

	}
	return "no cheese!"

}
