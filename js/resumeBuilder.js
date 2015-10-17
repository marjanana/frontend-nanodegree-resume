
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

bio.display = function() {
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
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedLocation, formattedGitHub);
};
bio.display();

var work = {
  "jobs":
  [
    {
      "employer": "CCNY",
      "title": "Writing Tutor",
      "location": "Harlem, NYC",
      "description":["Lorem Ipsum dolor sit amet."],
      "dates": "2014-2015"
    },

    {
      "employer": "CCNY Electronic Design and Multimedia",
      "title": "Teaching Assistant",
      "location": "Harlem, NYC",
      "description":["Lorem Ipsum dolor sit amet."],
      "dates": "2009-2015"
    }
  ]
  };

work.display = function() {
    for(var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var education = {
  "schools" :
  [
    {
      "name" : "City College of New York City",
      "location" : "Harlem, NYC",
      "degree" : "MA",
      "majors" : "Art History/Museum Studies",
      "dates" : "2009 - 2011",
      "url" : "http://www.ccny.cuny.edu/arthistory/"
    },
    {
     "name" : "Belgrade University. Faculty of Philosophy",
      "location" : "Belgrade, Serbia",
      "degree" : "BA",
      "majors" : "Art History",
      "dates" : " 1999 - 2005",
      "url" : "http://www.bg.ac.rs/en/"
    }
  ],
  "online courses" :
  [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "udacity",
      "dates" : "2015",
      "url" : "https://www.udacity.com/course/nd001"
    }
  ]
};

education.display = function() {
    for(school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      $(".education-entry:last").append(formattedName + formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
      $(".education-entry:last").append(formattedMajor);
    }
};
education.display();

var projects = {
  "projects":
  [
    {
    "title": "Portfolio",
    "dates":"2015",
    "description": "Project 1 for Udacity Nanodegree.",
    "image": "images/p1.jpg"
    },
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