$(document).ready(function() {

	// initial load triangles window height and width
    function load_stripes() {
        var width = $(window).width();
        var height = $(window).height() / 6;

        $(".stripe").css("border-left-width", width);
        $(".stripe").css("border-bottom-width", height);
        $("#more .stripe").css("top", -height);
    }
    load_stripes();

    $('#bucket_folder').keypress(function (e) {
    var regex = new RegExp("^[a-z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }

    e.preventDefault();
    return false;
});


	// $("#create").submit(function(e) {
	// 	e.preventDefault();

	// 	animate({
	// 	  el: "#side p, #side form",
	// 	  opacity: 0,
	// 	  duration: 500,
	// 	  complete: function() { 


	// 	  			animate({
	// 				  el: "#logo",
	// 				  translateY: -2000,
	// 				  opacity: 0,
	// 				  duration: 2500,
	// 				  //complete: function() { alert("Done!") }
	// 				});


	// 	   }
	// 	});

	// })
});