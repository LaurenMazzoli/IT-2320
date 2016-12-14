var Home = {};
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
Home.SetError = function (elementValue, elementMsg, errorMsg) {
    elementMsg.text(errorMsg);
    elementMsg.css("display", "block");
    elementValue.focus();
    elementValue.css("border-color", "red");

}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.resetAddElementData = function () {
    $(".elementName:first").val('');
    $(".elementValue:first").val('');
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
Home.addOrUpdateButtonClick = function (account, elementName, errorLocation, elementValue, elementMsg) {
    Home.ResetErrors();
    var username = account.username;
    $('.msg').text("");// reset screen errors
    $.ajax({
        url: "Home/AddOrUpdateElement",
        data: { username, elementName, elementValue },
        success: function (result) {
            var data = JSON.parse(result);
            if (data.Message != "Success") {
               // if (elementName == "username") 
               //     elementValueLoc = $(".elementName");
                Home.SetError(errorLocation, elementMsg, data.Error);
            }
            else {
                payload = JSON.parse(data.Payload);
                Home.rebuildAcctGrid(payload.account);
            }
        }
    });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.bindToMouseOverAndOut = function () {
    $(".button").mouseover(function () { $(this).css({ "background-color": "lavender", "color": "navy" }) });
    $(".button").mouseout(function () { $(this).css({ "background-color": "navy", "color": "lavender" }) });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.bindAcctGridButtons = function (account) {
    $(".updateButton").click(function () {
        var name = $(this).siblings('.col1').text();
        var elementName = $(this).siblings('.col1');
        var elementValue = $(this).siblings('.col2');
        var dataValue = $(this).siblings('.col2').val();
        var elementMsg = $(this).siblings('.msg');
        Home.addOrUpdateButtonClick(account, name, elementValue, dataValue, elementMsg);
    });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.buildAcctGridRow = function (elementName, elementValue) {
    var accountGrid = $(".accountGrid");
    accountGrid.append($("<div></div>").addClass("row"));
    if (elementName == "username") {
        $('.accountGrid').children('.row:last').append($("<div></div>").addClass("col1")
                    .text("AccountName"));
        $('.accountGrid').children('.row:last').append($("<div></div>").addClass("col2 " + elementName).text(elementValue));
    }
        //        $('<input/>').attr({ type: "text", disabled: "true", class: "col2 textbox " + elementName})
        //        .appendTo($('.accountGrid').children(".row:last"));//disabled true for username textbox
    else {

        $('.accountGrid').children('.row:last').append($("<div></div>").addClass("col1")
                    .text(elementName));
        $('<input/>').attr({ type: "text", class: "col2 textbox " + elementName })
            .appendTo($('.accountGrid').children(".row:last"));
        $('.accountGrid').children('.row:last').children('.textbox').val(elementValue);
    }
    $('.accountGrid').children('.row:last').append($("<div></div>").text("Update")
        .addClass("col3 button updateButton"));
 
    $('.accountGrid').children('.row:last').append($("<div></div>").addClass("msg " + elementName + "Msg"));
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.rebuildAcctGrid = function (account) {
    Home.buildAccountGrid(account);
    Home.resetAddElementData();
    $(".button").click(Home.ResetErrors);
    Home.bindToMouseOverAndOut();
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.buildAccountGrid = function (data) {
    var property = data;
    var username = data.username;
    var accountGrid = $(".accountGrid");
    accountGrid.empty();//remove nodes and rebuild

    for (var name in property) {
        Home.buildAcctGridRow(name, property[name]);
    }
    // adjust styling of username per current specs. could move to css if needed  
    $('.accountGrid').children('row:first').children('.col1').css("font-weight", "bold");
    $(".accountGrid .row .updateButton").first().css("display", "none");
    $('.accountGrid').children('row:first').children('.updateButton').hide();

    Home.bindAcctGridButtons(property);
}
Home.animatePages = function () {
    $(".page1").animate({
        left: '-480px', duration: 5000, easing: "linear",
        speed: 'slow', height: 'hide' });

    $(".page2").css("display", "inline-block");

    $(".page2").animate({
        left: '0px', duration: 5000, easing: "linear",
        speed: 'slow', height: 'show' });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.ResetPage2Errors = function () {
// *** STUB *** 
}
Home.buildAddElementGrid = function (account) {
// =============== CREATE ADD ELEMENT GRID ====================
    $(".page2").append($("<div></div>").addClass("addElementGrid"));
    var addElementGrid = $(".addElementGrid");
//========================= BUILD ROW 1 =======================
    addElementGrid.append($("<div></div>").addClass("row"));
    $(".row:last").append($("<div></div>").addClass("col1").text("ElementName"));
    $('<input/>').attr({ type: "text", class: "col2 textbox elementName" })
                 .appendTo($(".row:last"));
//========================= BUILD ROW 2 =======================
    addElementGrid.append($("<div></div>").addClass("row"));
    $(".row:last").append($("<div></div>").addClass("col1").text("ElementValue"));
    $('<input/>').attr({ type: "text", class: "col2 textbox elementValue" })
                 .appendTo($(".row:last"));//textbox inside col2 or on col2 div?
//====================== BUILD ERROR MSG ROW  ====================
    addElementGrid.append($("<div></div>").addClass("msg elementMsg"));
//==============  ======== BUILD BUTTON ROW  =  ===================
    addElementGrid.append($("<div></div>").addClass("buttonRow row"));
    $(".row:last").append($("<div></div>").text("Add").addClass("button addButton"));
//========================= BIND BUTTON =======================
    $(".addButton").click(function () {
       Home.addOrUpdateButtonClick(account, $(".elementName").val(), $(".elementName"), $(".elementValue").val(), $(".elementMsg"));
    });
}
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.buildPage2 = function (account) {
// 1. change font sizes 
// 2. Create and build account grid 
// 3. build section separator
// 4. build add account grid  
// 5. bind mouse events 
// 6. animate page 1 out & page2

    // ============================ STEP 1 ===========================
    $(".home").addClass("home-page2");
    $("h1").addClass("h1-page2");
    $(".stdParagraph").addClass("stdParagraph-page2");
// ============================ STEP 2 ===========================
   $(".page2").append($("<div></div>").addClass("accountGrid"));//create accountGrid
   Home.buildAccountGrid(account);
// ============================ STEP 3 ===========================
   $(".page2").append($("<div></div>").addClass("separator"));
// ============================ STEP 4 ===========================
   Home.buildAddElementGrid(account);
// ============================ STEP 5 ===========================
   $(".button").click(Home.ResetErrors);
   Home.bindToMouseOverAndOut();
// ============================ STEP 6 ===========================
   Home.animatePages();
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.AccountError = function (username, usernameMsg, data) {
   var errorMsg = "Unknown error; Contact Tech Support.";
   if (data.Username == "Invalid") 
       errorMsg = "Username does not exist.";
   Home.SetError($(".username:last"), $("usernameMsg:last"), errorMsg);
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.GetAccount = function (username, usernameMsg) {
    $.ajax({
        url: "Home/GetAccountInformation",
        data: { "Username": username.val() },
        success: function (result) {
            var data = JSON.parse(result);
            if (data.Message == "Success") {
                var payload = JSON.parse(data.Payload);
                Home.buildPage2(payload.account);
            }
            else
                Home.AccountError(username, usernameMsg, data);
            }
    });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.NewAcctError = function (username, usernameMsg, data) {
    var errorMsg = "";
    if (data.EmailCon == "Invalid" || data.EmailCon == "Mismatch") {
        errorMsg = (data.EmailCon == "Invalid" ?
               "E-mail address confirmation is required." :
               "E-mail confirmation does not match.");
        Home.SetError($(".emailCon"), $(".emailConMsg"), errorMsg)
    }
    if (data.EmailAdd == "Invalid") {
        errorMsg = "E-mail address is required and must contain an '@'.";
        Home.SetError($(".emailadd"), $(".emailaddMsg"), errorMsg)
    }
    if (data.Password == "Invalid") {
        errorMsg = "Password must contain at least six characters.";
        Home.SetError($(".password:last"), $(".passwordMsg:last"), errorMsg);
    }
    if (data.Username == "Invalid" || data.Username == "Exists") {
        errorMsg = (data.Username == "Invalid" ?
              "Username must be at least 6 characters." :
              "The username you entered is already taken.");
        Home.SetError($(".username:last"), $(".usernameMsg:last"), errorMsg);
    }
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.LoginError = function (username, usernameMsg, data) {
    var errorMsg = "";
    if (data.Username == "Invalid") {
          errorMsg = "Must be an existing account username.";
          Home.SetError($(".username:first"), $(".usernameMsg:first"), errorMsg);
    }
    else if (data.Password == "Wrong") {
       errorMsg = "Wrong password for existing account.";
       Home.SetError($(".password:first"), $(".passwordMsg:first"), errorMsg);
    }
    else {
       errorMsg = "An unknown user error; Contact Tech Support.";
       Home.SetError($(".username:first"), $(".usernameMsg:first"), errorMsg);
    }
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
Home.ResetLoginData = function () {
    $(".username:first").val('');
    $(".password:first").val('');
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.ResetNewAcctData = function () {
    $(".username:last").val('');
    $(".password:last").val('');
    $(".emailadd").val('');
    $(".emailCon").val('');
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////  
Home.createRow = function (parent, labelName, className) {
// create content row
    parent.append($("<div></div>").addClass("row"));
    var row = $(".row:last");
// create col1 
    row.append($("<div></div>").text(labelName).addClass("col1"));//label
// create col2
    row.append($("<div></div>").addClass("col2"));//col2 used for positioning
    $('<input/>').attr({ type: "text", class: "textbox" + " " + className }).appendTo($(".col2:last"));
// create error msg row
    var errorClass = "msg " + className + "Msg";
    parent.append($("<div></div>").addClass(errorClass));
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.NewAcctButtonClick = function () {
    Home.ResetLoginData();
    var username = $(".username:last");
    var usernameMsg = $(".usernameMsg:last");
    $.ajax({
        url: "Home/CreateAccount",
        data: {
            "Username": username.val(),
            "Password": $(".password:last").val(),
            "EmailAdd": $(".emailadd").val(),
            "EmailCon": $(".emailCon").val()
        },
        success: function (result) {
            var data = JSON.parse(result);
            data.Message == "Success" ?
               Home.GetAccount(username, usernameMsg) :
               Home.NewAcctError(username, usernameMsg, data);
        }
    });
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
Home.LoginButtonClick = function () {
    Home.ResetNewAcctData();
    var username = $(".username:first");
    var usernameMsg = $(".usernameMsg:first");
    $.ajax
    ({
        url: "Home/Login",
        data: {
            "Username": username.val(),
            "Password": $(".password:first").val()
        },
         success: function (result) {
            var data = JSON.parse(result);
            data.Message == "Success" ?
                 Home.GetAccount(username, usernameMsg) :
                 Home.LoginError(username, usernameMsg, data);
        }
    });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.ResetErrors = function () {
    $(".msg").text("");
    $(".msg").css("display", "none");
    $(".textbox").css({"border-color": "black", "border-width": "1px" });
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.buildNewAccountGrid = function (page) {
// =============== CREATE NEW ACCOUNT GRID ======================
    page.append($("<div></div>").addClass("newAcctGrid"));
    var newAcctGrid = $(".newAcctGrid");
// ================= CREATE NEW ACCT BOX1 =======================
    newAcctGrid.append($("<h2></h2").text("Create New Account").addClass("newAcctHeader"));
    var textString = "New users, please create a new account by ";
    textString += "providing us with some basic information.";
    newAcctGrid.append($("<div></div>").text(textString).addClass("newAcctBox1"));
// =============== CREATE NEW ACCT BOX2 ========================
    newAcctGrid.append($("<div></div>").addClass("newAcctBox2"));
    var newAcctBox2 = $(".newAcctBox2");

    Home.createRow(newAcctBox2, "Username", "username"); // Row1 & error
    Home.createRow(newAcctBox2, "Password", "password"); // Row2 & error
    Home.createRow(newAcctBox2, "E-mail Address", "emailadd"); // Row3 & error
    Home.createRow(newAcctBox2, "Repeat E-Mail Address", "emailCon");// Row4 & error
// ================== BUILD BUTTON ROW  ===================
    newAcctBox2.append($("<div></div>").addClass("buttonRow row"));//Row 5 (for button formatting)  
    $(".row:last").append($("<div></div>").text("Create Account").addClass("button newAcctButton")); //Row 5 contents
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.buildLoginGrid = function (page) {
// ================== CREATE LOGIN GRID ======================
    page.append($("<div></div>").addClass("loginGrid"));
    var loginGrid = $(".loginGrid");
// ================== BUILD LOGIN BOX1  ======================
    loginGrid.append($("<h2></h2").text("Log In").addClass("loginHeader"));
    var textString = "Already have an account with us? ";
    textString += "Returning users may log in by entering ";
    textString += "their site username and password.";
    loginGrid.append($("<div></div>").text(textString).addClass("loginBox1"));
    loginGrid.append($("<div></div>").addClass("loginBox2"));
// =================== BUILD LOGIN BOX2 =======================
    var loginBox2 = $(".loginBox2");
    Home.createRow(loginBox2, "Username", "username"); // Row 1
    Home.createRow(loginBox2, "Password", "password"); // Row 2 
// ==================  BUILD BUTTON ROW  ====================
    loginBox2.append($("<div></div>").addClass("buttonRow row"));//Row 3 (for button formatting) try to remove this
    $(".row:last").append($("<div></div>").text("Log In").addClass("button loginButton"));//contents of Row 3
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.bindPage1Events = function () {
    $(".button").mouseover(function () { $(this).css({ "background-color": "lavender", "color": "navy" }) });
    $(".button").mouseout(function () { $(this).css({ "background-color": "navy", "color": "lavender" }) });
    $(".button").click(Home.ResetErrors);
    $(".loginButton").click(Home.LoginButtonClick);
    $(".newAcctButton").click(Home.NewAcctButtonClick);
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Home.buildPage1 = function () {
    var page = $(".page1");
    Home.buildLoginGrid(page);
    page.append($("<div></div>").addClass("separator"));
    Home.buildNewAccountGrid(page);
}


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(document).ajaxError(function(){
        alert("An error occurred in the service! Contact Tech Support at DSantos@gmail.com!");
    });
    Home.buildPage1();
    Home.bindPage1Events();
});