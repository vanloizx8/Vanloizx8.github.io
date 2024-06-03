

function SendMail() {
    var params = {
       from_name : document.getElementById("fullName").value,
       email_id : document.getElementById("email_id").value,
       message : document.getElementById("message").value
    }
    emailjs.send("service_nmex8ia", "template_mm9o5mz", params).then(function (res) {
        alert("Thank you for contacting me!");
    })
}