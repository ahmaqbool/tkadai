function createContact_agile(email_received,first_name,phone,form_type) {
                var contact = {};
                contact.email = email_received;
                contact.first_name = first_name;
                contact.company = "chaipoint";
                contact.phone = phone;
                contact.website = "http://www.chaipoint.com";
                 contact.tags = form_type;
                 var property = {};
                 var address = {"email":email_received, "first_name":first_name, "phone":phone,"tags":form_type};
                 console.log(contact);
                // Custom fields can be added to contact object as

                _agile.create_contact(contact, {
                    success: function (data) {
                        // Set Email at success of contact creation. But you can set it at failure too.
                        _agile.set_email(email_received);

                        console.log("success");
                        console.log("Response = "+data);
                    },
                    error: function (data) {
                    	console.log(data.error);
                        console.log("error");

                    }
                });
                _agile.set_property(property, {
				    success: function (data) {
				        console.log("success");
				    },
				    error: function (data) {
				        console.log(data.error);
				    }
					});
        // Function end
            }


function createContact_agile_newsletter(email_received,form_type) {

       var contact = {};
                contact.email = email_received;
                contact.website = "http://www.chaipoint.com";
                 contact.tags = form_type;
                // Custom fields can be added to contact object as

                _agile.create_contact(contact, {
                    success: function (data) {
                        // Set Email at success of contact creation. But you can set it at failure too.
                        _agile.set_email(email_received);

                        console.log("success");
                        console.log("Response = "+data);
                    },
                    error: function (data) {
                       console.log(data.error);
                        console.log("Error Cause = "+data);
                    }
                });
        // Function end
            }

function createContact_agile_login(phone,email_received,form_type) {

				var contact = {};
				contact.phone = phone;
				contact.tags = form_type;
				contact.email = email_received;
				contact.website = "http://www.chaipoint.com";


                // Custom fields can be added to contact object as
                console.log(contact);
                _agile.create_contact(contact, {
                    success: function (data) {
                        // Set Email at success of contact creation. But you can set it at failure too.
                        _agile.set_email(email_received);

                        console.log("success");
                        console.log("Response = "+data);
                    },
                    error: function (data) {
                        console.log(data.error);
                        console.log("Error Cause = "+data);
                    }
                });
        // Function end
            }


function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
    console.log("agile new url");
}

includeJs("https://d1gwclp1pmzk26.cloudfront.net/agile/agile-cloud.js")