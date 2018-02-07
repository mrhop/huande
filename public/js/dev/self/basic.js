/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    //do something
    $(".navbar-nav li.active").removeClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li").addClass("active");
    $(".navbar-nav li.parent-" + $("body").attr("id") + "-li").addClass("active");

    if ($("body").attr("id") == "index") {
        $('.top-banner .flexslider').flexslider({
            fadeFirstSlide: false,
            controlNav: false,
            directionNav: true,
            animationSpeed: 1000,
            slideshowSpeed: 5000,
            slideshow: true,
            prevText: "",
            nextText: ""
        });
    } else if ($("body").attr("id") == "videos") {
        // $('video').hover(function() {
        //     $(this).prop("controls", true);
        // }, function() {
        //     $(this).prop("controls", false);
        // });
        $('video').click(function (e) {
            var _this = this
            $('video').each(function () {
                if (_this !== this) {
                    if (this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
                        this.pause()
                        this.controls = true
                    }
                }
            })
            if ((this.currentTime <= 0 || this.paused || this.ended) && this.readyState > 0) {
                this.play()
                this.controls = false
            } else if (this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
                this.pause()
                this.controls = true
            }
        })
    }
});

