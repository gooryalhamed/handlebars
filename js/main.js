var ourRequest =new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function(){
	if (ourRequest.status >= 200 && ourRequest.status < 400){
		var ourData = JSON.parse(ourRequest.responseText);
		createHTML(ourData);
	}else{
		console.log("unable to retrieve data");
	}
	
};
ourRequest.onerror = function(){
	console.log("connection error");
}
ourRequest.send();

Handlebars.registerHelper("calculatedAge", function(birthYear){
	var age = new Date().getFullYear() - birthYear;
	return age;
});

function createHTML(petsData){
	var rowTemplate = document.getElementById("pets-template").innerHTML;
	var compiledTemplate = Handlebars.compile(rowTemplate);
	var ourGeneratedHTML = compiledTemplate(petsData);
	var petsContainer = document.getElementById("pets-container");
	petsContainer.innerHTML = ourGeneratedHTML;
}
