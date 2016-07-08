//solved closure and callback classic issue with the help of this link http://stackoverflow.com/questions/15347750/getjson-and-for-loop-issue
$(function() {

    var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2", "ESL_SC2"];


    for (var i=0;i<channels.length;i++) {
        (function(i) {
        $.getJSON('https://api.twitch.tv/kraken/streams/'+channels[i]+'?callback=?', function(data) {
            if (data.stream === null) {             
                $.getJSON(data._links.channel+'?callback=?', function(data) {
                  console.log(data.logo);
                  $('#channels ul').append('<li><img src="'+data.logo+'"/><p><a href="'+data.url+'">'+data.display_name+'</a></p><p>Offline</p>');
                });
            } else if (data.status === 422) {
                $("#channels ul").append('<li>'+channels[i]+', account closed</li>'); 
          
            } else {
                $('#channels ul').append('<li><img src='+data.stream.channel.logo+'/><p><a href="'+data.stream.channel.url+'">'+data.stream.channel.display_name+'</a></p><p>'+data.stream.channel.status+'</p>');

            }

        });
    })(i);

}

});
