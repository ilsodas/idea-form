$(document).ready(function(){
    var errors = false;
    $('.required').parent().find('.input').on('blur', function() {
        var error_div = $(this).parent().find('.ErrorMessage');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('This field is required.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
    $('#IdeaTitle').on('blur', function(){
        var error_div = $(this).parent().find('.ErrorMessage');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('Please enter a title, this can not be empty.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
    $('#Email').on('blur', function(){
        var error_div = $(this).parent().find('.ErrorMessage');
        var field_container = $(this).parent();
        if (!$.EmailValidate($(this).val())) {
            error_div.html('Please enter Email, this can not be empty.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
    $('#MultiSelect').on('blur', function(){
        var error_div = $(this).parent().find('.ErrorMessage');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('Please enter select at least one, this can not be empty.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
    $('#Description').on('blur', function(){
        var error_div = $(this).parent().find('.ErrorMessage');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('Please enter description, this can not be empty.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });
    $('#myCheckbox').on('blur', function(){
        var error_div = $(this).parent().find('.ErrorMessage');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('Please enter Email, this can not be empty.');
            error_div.css('display', 'block');
            field_container.addClass('error');
			errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
			errors = false;
        }
    });

	$('#IdeaCaptureForm').submit(function(event) {
		event.preventDefault();
		 $('.required').parent().find('.input').trigger('blur');
        if (!errors)

            $.ajax({
                url: 'https://httpbin.org/post',
                type : "POST",
                dataType : "json",
                contentType : "application/json",
                data : $("#IdeaCaptureForm").serialize(),
                success : function(data) {
                  var message = 'Your message was sent.';
                  $('#Message').html(message);
                  $('#Message').css('display', 'block');
                  alert("Here is your idea " + data);
                },
                error: function() {
                  var message = 'Message not sent. Please try and re-send';
                  $('#Message').html(message);
                  $('#Message').css('display', 'block');
                }
            });
		else
			alert("You have not completed the form as per our requirement, complete and re-send");
	});
});

$.empty_field_validation = function(field_value) {
    if (field_value.trim() === '') return false;
    return true;
}

$.EmailValidate = function(Email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(Email);
}
