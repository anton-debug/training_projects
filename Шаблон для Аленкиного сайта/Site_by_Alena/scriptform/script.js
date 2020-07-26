$(document).ready(function() {

	//E-mail Ajax Send
	$(".heading_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "scriptform/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Совсем скоро я Вам перезвоню! :)");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});