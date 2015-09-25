
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

console.log(formattedName);
$("#header").prepend(formattedName);

var education = {
  "schools":
   [
    "name": "Citi College of New York",
    "location": "NYC",
    "degree": "MA",
    "majors":["Art History", "Museum Studies"],
    "dates": 2011,
    "url": "??"
   ]

  "onlineCourses":
   [
    "title": "Front-End DEveloper Nanodegree",
    "school": "Udacity",
    "date": "present",
    "url": ""
   ]
};

var work = {
  "jobs":
  [
    "employer": "City College of New York",
    "title": "Writing Tutor",
    "location": "NYC",
    "dates": "2014-2015",
    "description":["Lorem Ipsum dolor sit amet."
  ]
};

var projects = {
  "projects":
  [
   "pr-1": {
    "title": "lorem",
    "dates":"2015-2015",
    "description": "Lorem ipsum.",
    "image": ""
    }
  ]
}