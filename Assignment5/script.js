// Lauren Mazzoli / IT2320 / Fall 2016 / Assignment 5 JSON

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function createGymTeam()
{
    return { 
	"school" : "Solon High School",
	"sport" : "Gymnastics",
	"season" : "Winter", 
	"year" 	: "2016-17",
   
	"roster" 	: 
	[ 
	 	{ 
			"firstName" 	: "Gabby", 
			"lastName" 	: "Mazzoli", 
			"year" 		: "2017" 
		}, 

		{ 
			"firstName" 	: "Dani",
			"lastName" 	: "Goodman",
			"year" 		: "2017" 
		},
      
		{ 
			"firstName" 	: "Lindsay",
			"lastName" 	: "Greenberg",
			"year" 		: "2018"
		},
		{
		 	"firstName" 	: "Rachel",
			"lastName" 	: "Levikov",
			"year" 		: "2018"
		},
		{
		 	"firstName" 	: "Mallory",
			"lastName" 	: "Bendersky",
			"year" 		: "2019"
		}
	],
	"meet" : 
	[
		{
			"opponent" 	: "Solon vs. Hudson",
			"date" 		: "2017-01-05",
			"location" 	: "Home" 
		},
     	        {
			"opponent" 	: "Solon vs. Aurora",
			"date" 		: "2017-01-12",
			"location" 	: "Away"
		},
		{
			"opponent" 	: "Quad Meet @ Chardon",
			"date" 		: "2017-01-19",
			"location" 	: "Away"
		}
	]
    }
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

function displayGymTeam(team)
{
        $("h1").text(team.year+" " + team.school + " " + team.sport + " Team");
	buildRoster(team);
	buildMeetSchedule(team);
}

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function buildRoster(team) 
{

// figure out how to change this js code over to jquery if have time //
// $(".grid").append("<div>") then add class.                        //


	var rosterGrid = document.getElementsByClassName("grid")[0];



	var title = CreateDiv("", "title");
	rosterGrid.appendChild(title);

	var head = CreateDiv("Gymnast Name","head1");
	title.appendChild(head);

	head = CreateDiv("Year","head2");
	title.appendChild(head);

	var count;
	for (count = 0; count < team.roster.length; count ++)  
	{		
		buildGymnastRow(rosterGrid, team.roster[count]);
	}

}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function buildMeetSchedule(team)
{

	var meetGrid = document.getElementsByClassName("grid")[1];


	var title = CreateDiv("", "title");
	meetGrid.appendChild(title);

	var head = CreateDiv("Meet","head1");
	title.appendChild(head);

	head = CreateDiv("Date","head2");
	title.appendChild(head);

	head = CreateDiv("Location","head3");
	title.appendChild(head);

	var count;
	for (count = 0; count < team.meet.length; count++) 
	{
		buildMeetRow(meetGrid, team.meet[count]);
	}

}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function buildGymnastRow(grid, gymnast)

{
	var row = CreateDiv("","row");
	grid.appendChild(row);

	var gymnastCell1 = CreateDiv(getFullName(gymnast),"cell1");
	row.appendChild(gymnastCell1);	

	var gymnastCell2 = CreateDiv(gymnast.year,"cell2");
	row.appendChild(gymnastCell2);
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function buildMeetRow(grid, meet)

{
	var row = CreateDiv("","row");
	grid.appendChild(row);

	var meetCell = CreateDiv(meet.opponent,"cell1");
	row.appendChild(meetCell);	

        var meetDate = meet.date.substr(5,2)+"/"+meet.date.substr(8,2)+"/"+meet.date.substr(0,4);

	meetCell = CreateDiv(meetDate,"cell2");
	row.appendChild(meetCell);

	meetCell = CreateDiv(meet.location,"cell3");
	row.appendChild(meetCell);

}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
  

function CreateDiv(text, className)

{

    var newDiv = document.createElement("div");
    
newDiv.className = className;

    newDiv.innerHTML = text;

    return newDiv;

}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function getFullName(gymnast)
{

return gymnast.firstName+" " +gymnast.lastName
 
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

$(document).ready(function()
{
	$(".button").click(function()
	{
		$(".button").addClass("hide");
		var gymnasticsTeam = createGymTeam();
		displayGymTeam(gymnasticsTeam);
	});
});