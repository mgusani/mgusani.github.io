(function() {
    $(function() {
        var n, e, t;
        return n = function() {
            return $("h1").append("<span>"), $("h1 span").css({
                display: "block",
                width: "0px",
                height: "26px",
                background: "#fff",
                "margin-top": "20px"
            }).animate({
                width: t + "px"
            }, 800), setTimeout(function() {
                return $("body").removeClass("loading")
            }, 1e3)
        }, -1 !== navigator.appVersion.indexOf("Windows") && $("body").addClass("pcuser"), 
        e = $("html").attr("lang"), "fr" === e ? (t = 397, "en" === navigator.language.substring(0, 2) && 
        (window.location.href = "https://mgusani.github.io/")) : t = 365, $(".companies_top li, .works li > a:first-of-type").on("mouseenter mouseleave", function(n) {
            return "mouseenter" === n.type ? $("body").addClass("hover") : $("body").removeClass("hover")
        }), $(window).on("load", function() {
            return window.innerWidth > 620 ? n() : $("body").removeClass("loading")
        })
    }), $(window).resize(function() {
        return $(window).width() <= 620 ? ($("h2").hide(), $("h1 span").hide(), $(".works li:first-child, .companies, #anim").hide()) : ($("h2").show(), $("h1 span").show(), $(".works li:first-child, .companies, #anim").show()), $(".companies_top").find("li").on("mouseenter", function(n) {
            var e;
            e = $(this).find("a").text(), dataLayer.push({
                event: "navigation",
                eventCategory: "Company",
                eventAction: "Hover",
                eventLabel: e
            })
        }), $("a").on("click", function() {
            var n, e, t;
            t = $(this), e = t.text(), n = t.attr("href"), dataLayer.push({
                event: "navigation",
                eventCategory: "Links",
                eventAction: "Click",
                eventLabel: e,
                eventValue: n
            })
        })
    })
}).call(this);