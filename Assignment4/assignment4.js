// Lauren Mazzoli Fall 2016 IT-2320 Assignment4

var Main = {};

Main.Gymnast = function(firstName, lastName, gradYear, squad, parentFirstName, parentLastName, parentEmail)
{

 	this.FirstName 		= firstName;
	this.LastName 		= lastName;
	this.GradYear 		= gradYear;
	this.Squad 		= squad;
	this.ParentFirstName 	= parentFirstName;
	this.ParentLastName 	= parentLastName; 
	this.ParentEmail 	= parentEmail;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.SetGymnastName = function(firstName, lastName)
{
 	this.FirstName 	= firstName;
	this.LastName 	= lastName;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.SetGradYear = function(gradYear)
{
 	this.GradYear 	= gradYear;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.SetSquad = function(squad)
{
 	this.Squad 	= squad;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.SetParentName = function(firstName, lastName)
{
 	this.ParentFirstName 	= firstName;
	this.ParentLastName 	= lastName;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.SetParentEmail = function(email)
{
 	this.ParentEmail = email;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.GetFullName = function(captain1, captain2)
{

	if (this == captain1 || this == captain2)	
	{
 	   return this.FirstName + " " + this.LastName + "*"
	}
	else
	{
 	   return this.FirstName + " " + this.LastName;
	}
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.GetSquad = function()
{
 	return this.Squad;
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.GetParentName = function()
{
 	return this.ParentFirstName + " " + this.ParentLastName;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gymnast.prototype.GetGradYear = function()
{
 	return this.GradYear;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
 
Main.Gymnast.prototype.GetParentEmail = function()
{
 	return this.ParentEmail;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Danielle 	= new Main.Gymnast("Danielle", "Goodman", "2016", "Varsity", "Barb", "Goodman", "bgoodman@gmail.com");

Main.Gabby 	= new Main.Gymnast("Gabrielle", "Mazzoli", "2017", "Varsity", "Lauren", "Mazzoli", "mazzolil@live.com");

Main.Lindsay 	= new Main.Gymnast("Lindsay", "Greenberg", "2018", "Varsity", "Heather", "Greenberg", "");

Main.Mallory 	= new Main.Gymnast("Mallory", "Bendersky", "2019", "Junior Varsity", "Mara", "Bendersky", "mbend@yahoo.com");

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

Main.Gabby.SetGymnastName("Gabby", "Mazzoli");

Main.Mallory.SetSquad("Varsity");

Main.Lindsay.SetParentEmail("heathergreenberg@yahoo.com");

Main.Danielle.SetGradYear("2017");

Main.Captain1 = Main.Gabby;

Main.Captain2 = Main.Danielle;

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

$(document).ready(function ()
 {

	/////////////////// replace javascript code with jquery ////////////////////////////////////
	//
	//     document.getElementsByClassName("cell1")[0].innerHTML = 	
	//	                         Main.Danielle.GetFullName(Main.Captain1,Main.Captain2);
	//     document.getElementsByClassName("cell2")[0].innerHTML = Main.Danielle.GetGradYear();
	//     document.getElementsByClassName("cell3")[0].innerHTML = Main.Danielle.GetSquad();
	//     document.getElementsByClassName("cell4")[0].innerHTML = Main.Danielle.GetParentName();
	//     document.getElementsByClassName("cell5")[0].innerHTML = Main.Danielle.GetParentEmail();
	//
	/////////////////////////////////////////////////////////////////////////////////////////////

     var cells1 = $(".cell1");
     var cells2 = $(".cell2");
     var cells3 = $(".cell3");
     var cells4 = $(".cell4");
     var cells5 = $(".cell5");

     $(cells1[0]).text(Main.Danielle.GetFullName(Main.Captain1, Main.Captain2));
     $(cells2[0]).text(Main.Danielle.GetGradYear());
     $(cells3[0]).text(Main.Danielle.GetSquad());
     $(cells4[0]).text(Main.Danielle.GetParentName());
     $(cells5[0]).text(Main.Danielle.GetParentEmail());

     $(cells1[1]).text(Main.Gabby.GetFullName(Main.Captain1, Main.Captain2));
     $(cells2[1]).text(Main.Gabby.GetGradYear());
     $(cells3[1]).text(Main.Gabby.GetSquad());
     $(cells4[1]).text(Main.Gabby.GetParentName());
     $(cells5[1]).text(Main.Gabby.GetParentEmail());

     $(cells1[2]).text(Main.Lindsay.GetFullName(Main.Captain1, Main.Captain2));
     $(cells2[2]).text(Main.Lindsay.GetGradYear());
     $(cells3[2]).text(Main.Lindsay.GetSquad());
     $(cells4[2]).text(Main.Lindsay.GetParentName());
     $(cells5[2]).text(Main.Lindsay.GetParentEmail());

     $(cells1[3]).text(Main.Mallory.GetFullName(Main.Captain1, Main.Captain2));
     $(cells2[3]).text(Main.Mallory.GetGradYear());
     $(cells3[3]).text(Main.Mallory.GetSquad());
     $(cells4[3]).text(Main.Mallory.GetParentName());
     $(cells5[3]).text(Main.Mallory.GetParentEmail());
	
  });