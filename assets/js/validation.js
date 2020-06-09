window.onload = function () {



    let submit = document.getElementById("submit");

    let restrictNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let alphabet = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g',
                    'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n',
                    'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u',
                    'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
    
    let restrictSymbol = ['!', '#', '$', '%', '^', '&', '*', '(', ')',
                        '-', '+', '=', '_', '{', '}', '[', ']', ':',
                    ';', '?', '<', '>', '/', '\"', '|', '\'']
    
    
    
    let containsRestrictSymbol = (string) => {
        for (symbol of restrictSymbol) {
            if (string.includes(symbol)) return true
        }
        return false
    }

    let allowedSymbol = (string) => {
        let allowSymbol = restrictSymbol
        allowSymbol.push('.');
        allowSymbol.push('@');
        for (symbol of allowSymbol) {
            if (string.includes(symbol)) return true
        }
        return false
    }

    let containsRestrictNumeric = (string) => {
        for (num of restrictNumeric) {
            if(string.includes(num)) return true
        }
        return false
    }

    let containsAlphabet = (string) => {
        for (alpha of alphabet) {
            if(string.includes(alpha)) return true
        }
        return false
    }

    let containsAlphaNumeric = (string) => {
        if (allowedSymbol(string) == true) return false;
        if (containsRestrictNumeric(string) == false) return false;
        if (containsAlphabet(string) == false) return false;
        return true;
    }

    let letterOnly = (string) => {
        if (allowedSymbol(string) == true) return false;
        if (containsRestrictNumeric(string) == true) return false;
    }

    function validateEmail(str){
        at = -1;
        dot = -1;
    
        for(i = 0; i< str.length; i++){
            if(str.charAt(i) == '@')
                at = i;
    
            if(str.charAt(i) == '.')
                dot = i;
        }
    
        console.log(at);
        console.log(dot);
    
        if(at == -1 || dot == -1)
            return false;
    
        if(str.substr(0, at) == "") return false;
    
        if(dot - at <= 1) return false;
        
        if(str.substr(dot, str.length) == "") return false;
        
        return true;
    }

    let validate = (e) => {

        let fullname = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let passwordconfirm = document.getElementById("passwordconfirm").value;
        let male = document.getElementById("male");
        let female = document.getElementById("female");
        let qty = document.getElementById("qty").value;
        let address = document.getElementById("address").value;
        let agree = document.getElementById("agree");

        e.preventDefault();
        

        if (fullname == '') {
            alert("Fullname must be filled");
        } else if (letterOnly(fullname) == false) {
            alert("Fullname only contains letters!");
        } else if (email == '') {
            alert("Email must be Filled!");
        } else if (validateEmail(email) == false) {
            alert("Email must contains @ and .");
            // } else if (containsRestrictSymbol(email) == true) {
            //     alert("Email must not contain symbols except @ and .");
        } else if (username.length < 6) {
            alert("Username must more than 6 Characters!");
        } else if (username.includes(" ")) {
            alert("Username must no space!");
        } else if (password.length < 8) {
            alert("Password must more than 8 Characters!");
        } else if (containsAlphaNumeric(password) == false) {
            alert("Password must contains letter and number!");
        } else if (password != passwordconfirm) {
            alert("Password not Match!");
        } else if (!male.checked && !female.checked) {
            alert("Please choose your gender!");
        } else if (qty == 0) {
            alert("Qty must greater than 0");
        } else if (!address.includes(" Street")) {
            alert("Address must ends with  Street");
        } else if (!agree.checked) {
            alert("You must Accept Terms and Conditions!");
        } else {
            alert("Success")
        }
            
    }
    submit.addEventListener("click", e => validate(e))

    
}