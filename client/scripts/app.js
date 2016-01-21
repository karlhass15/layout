
$(document).ready(function(){

    $("#contactForm").submit(addContact);

});


//function adds a persons info and message to database
function addContact() {
    event.preventDefault();
    var values = {};
    console.log("addContact function")
    //clears form in email.html
    $.each($(this).serializeArray(), function (i, field) {
        values[field.name] = field.value;

    });
    //clearing the fields after submit in email.html
    $('#contactForm').find("input[type=text]").val("");
    console.log("form should clear");
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

