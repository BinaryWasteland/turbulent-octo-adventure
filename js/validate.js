jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bprogrammer\b$/.test(value);
    }, "type the correct answer -_-");

// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            captcha: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "~ Name Field - If you want to talk I need to know what to call you",
                minlength: "~ Name Field - Lets be honest, your name ist 2 characters or less. If it is your my hero and I need to fix this...."
            },
            email: {
                required: "~ Email Field - How are we going to become partners in crime if I can't reach you?"
            },
            message: {
                required: "~ Message Field - Leaving no message is like trying to divide by zero. It just won't work.",
                //minlength: "Message Field - thats all? really?"
            },
            captcha: {
                required: "~ Human Test - It has been determined you are likely SkyNet and I have just contacted John Connor as a result. Help us all!"
            }
        },
        errorElement : 'div',
        errorLabelContainer: '#errorTxt',
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"php/process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
