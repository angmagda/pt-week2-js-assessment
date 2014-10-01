//Create a function called User which has the following properties
//username, email, password, birthday

var user = function() {
	return {
		username: 'Magda',
		email: 'angmagda@gmail.com',
		password: 'hello',
		birthday: '8/30/80'
	}
};


//edit the username to be 'js_slinger'
  
var newUser = user();
newUser.username = 'js_slinger';


//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

newUser.favoriteBook = 'Mike Tyson learns to Whistle';


//Remove the password property from your object
  
delete newUser.password;



//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

var values = [];
for (var key in newUser) {
	values.push(newUser[key]);
}
