
var bio = {

  "name": "Ana Marjanovic",
  "role": "Web Developer",
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "biopic": "images/ja2.jpg",
  "contacts":
  {
    "mobile": "646 555 5555",
    "email": "anamyers03@gmail.com",
    "github": "marjanana",
    "location": "NYC"
  },
    "skills": ["HTML", "CSS", "JavaScript", "Responsive Web Design"]
};
//name
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);
//role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
//message
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
         $("#header").append(formattedMessage);
//image
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedImage);
//skills
if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

     var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
}
//contact
for(contact in bio.contacts) {

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
       $("#footerContacts").prepend(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
 };



var work = {
  "jobs":
  [
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


 for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
  console.log(formattedTitle);
 }


var projects = {
  "projects":
  [
    {
    "title": "Portfolio",
    "dates":"2015-2015",
    "description": "Lorem ipsum.",
    "image": "images/p1.jpg"
    },
    //{
    // "title": "lorem",
    // "dates":"2015-2015",
    // "description": "Lorem ipsum.",
    //"image": "images/p1.jpg"
    //}
  ]
};


projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
     $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].image.length > 0) {

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
    $(".project-entry:last").append(formattedImage);

    }
  }
};
projects.display();


$("#mapDiv").append(googleMap);