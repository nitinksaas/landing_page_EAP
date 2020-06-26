
(function ($) {
"use strict"; 


 // mailchimp start
    if ($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "https://getrightfeature.us10.list-manage.com/subscribe/post?u=e40edf713a24d9a3681df9554&amp;id=95c7fc20ad" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }
//Thank you for signing up! You will hear from us soon.
    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + 'Thank you for signing up! We are working as hard as we can to get you onboard!').fadeIn(1000);
            $('.subscription-error').fadeOut(500);
			$(".mailchimp").trigger("reset");


        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': '',
        0: '',
        1: 'Please enter email id',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

	
})(jQuery);