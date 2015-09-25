
var bio = {

  "name": "Ana Marjanovic",
  "role": "Web Developer",

  "contacts":
  {
    "mobile": "646 326 4074",
    "email": "anamyers03@gmail.com",
    "github": "marjanana",
    "location": "NYC"
  },

    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "skills": ["lorem", "ipsum", "dolor"],
    "biopic": "images/ja2.jpg",

};

var formattedName =
 HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedRole =
 HTMLheaderRole.replace("%data%", bio.role);
 $("#header").append(formattedRole);

console.log(formattedName);


