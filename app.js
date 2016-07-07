$(function() {

  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];
    
    $.getJSON('https://api.twitch.tv/kraken/streams/storbeck?callback=?', function(data) {
      //need picture,name with twicth channel url, status message, description
      if(data.stream===null){
        console.log(data);
         $.getJSON('https://api.twitch.tv/kraken/channels/storbeck?callback=?', function(data) {
            console.log(data);
         });
      }
      else if(data.status === 422){
        console.log(data.status);
      }
      else {
        console.log(data);
      }
        //console.log(data.stream.channel.display_name);
        //console.log(data.stream.channel.profile_banner);
        //console.log(data.stream.channel.game);

    });


})();
