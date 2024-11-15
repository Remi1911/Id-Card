function idCard() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    var age = document.getElementById("age").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if (age <= 100) {
        document.getElementById("postAge").innerHTML = "Age: " + age;
    }
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
}
