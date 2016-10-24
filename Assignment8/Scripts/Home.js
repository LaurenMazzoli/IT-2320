var Client = {}

Client.CallGetPlayerInformation = function()
{

  $.ajax
    ({
        url: "Home/GetPlayerInformation",
        data: { PlayerNumber: $(".player-number-textbox-input").val() },
        success: function (result)
        {
           var player = JSON.parse(result);
           Client.DisplayPlayerInformation(player);

        }
    });

}
Client.DisplayPlayerInformation = function(player)
{
    $(".output").text(player.PlayerName);
} 

$(document).ready(function () 

{
    $(".player-number-button").click(Client.CallGetPlayerInformation);

});