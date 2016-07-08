//solved closure and callback classic issue with the help of this link http://stackoverflow.com/questions/15347750/getjson-and-for-loop-issue
$(function() {

    var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2", "ESL_SC2"];


    for (var i = 0; i < channels.length; i++) {
        (function(i) {
            $.getJSON('https://api.twitch.tv/kraken/streams/' + channels[i] + '?callback=?', function(data) {
                if (data.stream === null) {
                    $.getJSON(data._links.channel + '?callback=?', function(data) {
                        if (data.logo === null) {
                            data.logo = "http://img.bhs4.com/2a/0/2a05500a3a3ef626426fbca6efb69017863992af_large.jpg";
                        }
                        $('#channels ul').append('<li class="offline"><img src="' + data.logo + '"/><span><a href="' + data.url + '">' + data.display_name + '</a></span><span>Offline</span>');
                    });
                } else if (data.status === 422) {

                    $("#channels ul").append('<li class="closed"><img src="http://img.bhs4.com/2a/0/2a05500a3a3ef626426fbca6efb69017863992af_large.jpg"/><span>' + channels[i] + ', account closed</span></li>');

                } else {

                    $('#channels ul').append('<li class="online"><img src="' + data.stream.channel.logo + '"/><span><a href="' + data.stream.channel.url + '">' + data.stream.channel.display_name + '</a></span><span>' + data.stream.channel.status + '</span>');

                }

            });
        })(i);

    }

    $('.off').on('click', function() {
        $('.offline').show();
        $('.online,.closed').hide();

    })

    $('.on').on('click', function() {
        $('.online').show();
        $('.offline,.closed').hide();

    })

    $('.close').on('click', function() {
        $('.closed').show();
        $('.offline,.online').hide();

    })

    $('.all').on('click', function() {
        $('.online,.offline,.closed').show();

    })

});
