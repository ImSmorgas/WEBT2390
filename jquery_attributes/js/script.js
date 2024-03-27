$(function () {
    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    $('.thumbnail').click(function () {
        var imgSrc = $(this).attr('src');
        $('.main-image img').attr('src', imgSrc);
    });

    $("img[value='crazycat']").attr("src", "images/drunk-cat.jpg");
    $("img[value='madplant']").attr("src", "images/want-the-smoke.jpg");
    $("img[value='cutesoverdates']").attr("src", "images/cute-shroom.jpg");
});