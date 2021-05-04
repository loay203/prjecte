function Validation() {
    var fn = document.forms["F"]["fname"].value;
    if (fn == "") {
        alert("First name must be filled out");
        return false;
    }
    var ln = document.forms["F"]["lname"].value;
    if (ln == "") {
        alert("Last name must be filled out");
        return false;
    }
    var email = document.forms["F"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    var un = document.forms["F"]["un"].value;
    if (un == "") {
        alert("Username must be filled out");
        return false;
    }
    var password = document.forms["F"]["password"].value;
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }

    return (true);
}

function save() {
    var email = document.forms["F"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    Username = email.split('@')[0];
    alert("The application of " + Username + " is saved!");
}

function inOrder() {
    let input1 = document.getElementsByName("fname")
    let input2 = document.getElementsByName("lname")
    let input3 = document.getElementsByName("pw")
    let input4 = document.getElementsByName("pn")
    let input5 = document.getElementsByName("email")
    let input6 = document.getElementsByName("un")
    let input7 = document.getElementsByName("password")
    let input8 = document.getElementsByName("dg")
    let input9 = document.getElementsByName("date")
    let input10 = document.getElementsByName("cv")

    if (input1 == "" && input2 != "") {
        alert("Please fill inputs in order");
    } else if (input2 == "" && input3 != "") {
        alert("Please fill inputs in order");
    } else if (input3 == "" && input4 != "") {
        alert("Please fill inputs in order");
    } else if (input4 == "" && input5 != "") {
        alert("Please fill inputs in order");
    } else if (input4 == "" && input5 != "") {
        alert("Please fill inputs in order");
    } else if (input5 == "" && input6 != "") {
        alert("Please fill inputs in order");
    } else if (input6 == "" && input7 != "") {
        alert("Please fill inputs in order");
    } else if (input7 == "" && input8 != "") {
        alert("Please fill inputs in order");
    } else if (input8 == "" && input9 != "") {
        alert("Please fill inputs in order");
    } else if (input9 == "" && input10 != "") {
        alert("Please fill inputs in order");
    }
}