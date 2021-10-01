
    (function() {
        // https://dashboard.emailjs.com/admin/integration
        emailjs.init('user_VJTJbztgum8mwX2qXaXLy');
    })();



    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // below maybe sends email
          //  emailjs.send('jdtaylor', 'template_fwwruch', 'user_VJTJbztgum8mwX2qXaXLy');
          // these IDs from the previous steps

            emailjs.sendForm('jdtaylor', 'template_fwwruch', this, 'user_VJTJbztgum8mwX2qXaXLy')
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }
