
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

}

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

 var work = {
  "jobs": [
  {
    "employer": "CCNY",
    "title": "Writing Tutor",
    "location": "NYC",
    "description":["Lorem Ipsum dolor sit amet."],
    "dates": "2014-2015"
  },

  {
    "employer": "CCNY Electronic Design and Multimedia",
    "title": "Teaching Assistant",
    "location": "NYC",
    "description":["Lorem Ipsum dolor sit amet."],
    "dates": "2009-2015"
  }
  ]
  };

function displayWork(){
 for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace
    ("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace
    ("%data%", jobs[job].title);
  var formattedEmployerTitle = formattedEmployer +
    formattedEmployerTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry;:last"). append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry;:last"). append(formattedDescription);

 }
}

displayWork();

projects.display = function () {
  for (project in projects.projects) {
    &("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLProjectTitle.replace("%data%", projects.projects[project].title);
    $("project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
     $("project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $("project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.lenght > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $("project-entry:last").append(formattedImage);
      }
    }
  }
}
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