$(function () {
    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    // Effects
    $("button").hover(
        function() {
            $(this).css("transform", "scale(0.95)");
        },
        function() {
            $(this).css("transform", "scale(1)");
        }
    );
    function openDialog(imgSrc, title) {
        $("#dialog img").attr("src", imgSrc);
        $("#dialog h3").text(title);
        $("#dialog").dialog("open");
    }

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        width: 'auto',
        height: 'auto',
        resizable: false,
        draggable: false,
        show: {
            effect: "fade",
            duration: 400
        },
        hide: {
            effect: "fade",
            duration: 400
        },

        open: function(event, ui) {
            $(".ui-widget-overlay").on("click", function() {
                $("#dialog").dialog("close");
            });
        },

        create: function(event, ui) {
            $(this).parent().css({
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            });
        }
    });
    // Styles
    $("body").css("background-color", "#fefefe");
    $("h1").css("color", "#b22026");
    $("h1").css("font-family", "DM Serif Display");
    $("h3").css("font-family", "DM Serif Display");
    $(".btn").css("background-color", "#ce8f0f")
    $(".btn").css("color", "#000")
    $("h1").css("font-size", "50px");
    $("#ch1").css("text-align", "center");

    // Text
    $("#1").text("SUGAR")
    $(".columbus").text("1918")
    $(".nina").text("Altoids were introduced to the USA.")


    $(".btn").click(function() {
        var imgSrc = $(this).data("img");
        var title = $(this).data("title");
        openDialog(imgSrc, title);
    });
});
