
$(document).ready(function(){


    //$("#contactForm").submit(function(event){
    //    event.preventDefault();
    //    var values = {};
    //
    //});
//submit button in email.html
    $("#contactForm").submit(addContact);

});
//function adds a persons info and message to database
function addContact() {
    event.preventDefault();
    var values = {};

    //clears form in email.html
    $.each($(this).serializeArray(), function (i, field) {
        values[field.name] = field.value;

    });
    //clearing the fields after submit in email.html
    $('#contactForm').find("input[type=text]").val("");
    $('#contactForm').find("textarea").val("");

    //sends addedContact's info to database
    $.ajax({
        type: "POST",
        url: "/contact",
        data: values,
        success: function (data) {
            //emailSent()
            console.log('post made it');
        }
    });
}

