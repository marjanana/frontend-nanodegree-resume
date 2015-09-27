
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

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
};

