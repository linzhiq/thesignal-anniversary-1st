// Author: Qi Linzhi (qi@qlz.io)
// Date: Feb. 28, 2018

var sections = 8;
var path = "images/";

var sizes = [360, 480, 540, 720, 960, 1280, 1440, 1600, 1920, 2560, 3200, 3840];
var hex_codes = [
    "#FFFFFF",
    "#F3D7E2",
    "#E4F5F9",
    "#BEF8B4",
    "#A0C6F1",
    "#F1E5E5",
    "#B6D0FF",
    "#F0F0F0"
];

var blurbs = [
    {
        "h1": "25",
        "h2": "size of The Signal family",
        "href": ""
    },
    {
        "h1": "31",
        "h2": "interviews of people across <b>22</b> industries",
        "a": "BEST OF 2017",
        "href": "http://thesign.al/tag/best-of-2017/"
    },
    {
        "h1": "56,000",
        "h2": "page views from <b>8.8k</b> readers across <b>48</b> states.",
        "href": ""
    },
    {
        "h1": "77",
        "h2": "total career pivots among all interviewees",
        "href": ""
    },
    {
        "h1": "400",
        "h2": "Squirrels Without Morality card suggestions read.",
        "a": "PRE-ORDER BATCH 2",
        "href": "http://www.squirrelswithoutmorality.com/"
    },
    {
        "h1": "1500",
        "h2": "minutes transcribed",
        "h3": "215",
        "h4": "GitHub commits",
        "h5": "95",
        "h6": "hours of Sims played",
        "href": "http://www.squirrelswithoutmorality.com/"
    },
    {
        "h1": "30",
        "h2": "teams competed for a chance to present to the Mayor of Philadelphia and city representatives",
        "a": "READ ON WHARTON STORIES",
        "href": "https://www.wharton.upenn.edu/story/wharton-students-make-case-bringing-amazons-headquarters-philadelphia/"
    },
    {
        "h1": "TOO MANY",
        "h2": "no. of times our name has been mistaken",
        "href": ""
    }
];

$(document).ready(function () {
    var $illustrations = $("#illustrations");

    for (var section = 0; section < sections; section++) {
        var $div = $('<div/>', {
            id: 'section-' + (section + 1).toString(),
            class: "illustration tilt",
            style: "background-color: " + hex_codes[section]
        }).appendTo($illustrations);

        var srcset = "";
        for (var i = 0; i < sizes.length; i++) {
            var size = sizes[i];

            if (section === 0) {
                srcset += path + size + "/" + (section + 1).toString() + "_square.png " + size.toString() + "w, "
            }
            else {
                srcset += path + size + "/" + (section + 1).toString() + ".png " + size.toString() + "w, "
            }
        }

        var $img = $('<img/>', {
            id: 'img-' + (section + 1).toString(),
            class: "illustration-img",
            srcset: srcset
        }).appendTo($div);

        var $container = $('<div/>', {
            id: 'container-' + (section + 1).toString(),
            class: "illustration-text-container"
        }).appendTo($div);

        var blurb = blurbs[section], keys = Object.keys(blurb);
        for (var i = 0; i < keys.length - 1; i++) {
            var key = keys[i];
            var text = blurb[key];

            var $text = $('<' + key + '/>', {
                id: 'text-' + (section + 1).toString() + "-" + i.toString(),
                class: "illustration-text",
                html: text,
                href: blurb['href']
            }).appendTo($container);
        }
    }

    // $('.js-tilt').tilt({
    //     glare: true,
    //     maxGlare: .5
    // })

    $(document).ready(function() {
        var $body = $('body');
        var detectMouse = function(e){
            if (e.type === 'mousedown') {
                const tilt = $('.tilt').tilt({
                    maxTilt: 10,
                    perspective: 1000,
                    scale: 1.05
                });
            }
            else if (e.type === 'touchstart') {

            }
            // remove event bindings, so it only runs once
            $body.off('mousedown touchstart', detectMouse);
        };
        // attach both events to body
        $body.on('mousedown touchstart', detectMouse);
    });
});