$(document).ready(function () {
    $("#usernamevalidation").hide();
    $("#passwordvalidation").hide();
    $("#confirmpasswordvalidation").hide();
  
    var username_error = true;
    var password_error = true;
    var confirm_password_error = true;
    var email_error = true;
  
    $("#username").keyup(function () {
      username_validation();
    });
  
    function username_validation() {
      var username_val = $("#username").val();
      if (username_val.length == "") {
        $("#usernamevalidation").show();
        $("#usernamevalidation").html("Username cannot be empty !");
        $("#usernamevalidation").css("color", "rgb(228, 222, 222)");
        username_error = false;
        return false;
      } else {
        $("#usernamevalidation").hide();
      }
  
      if (username_val.length < 4) {
        $("#usernamevalidation").show();
        $("#usernamevalidation").html(
          "Username should contain at least 4 characters"
        );
        $("#usernamevalidation").css("color", "rgb(228, 222, 222)");
        username_error = false;
        return false;
      } else {
        $("#usernamevalidation").hide();
      }
    }
  
    $("#email").keyup(function () {
      email_validation();
    });
  
    function email_validation() {
      var email_val = $("#email").val();
      if (email_val.length == "") {
        $("#emailvalidation").show();
        $("#emailvalidation").html("Email cannot be empty");
        $("#emailvalidation").css("color", "rgb(228, 222, 222)");
        email_error = false;
        return false;
      }
      var email1 = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      if (!email1.test(email_val)) {
        $("#emailvalidation").show();
        $("#emailvalidation").html("Enter email in correct format");
        $("#emailvalidation").css("color", "rgb(228, 222, 222)");
        email_error = false;
        return false;
      } else {
        $("#emailvalidation").hide();
      }
    }
  
    $("#password").keyup(function () {
      password_validation();
    });
  
    function password_validation() {
      var password_val = $("#password").val();
      if (password_val.length == "") {
        $("#passwordvalidation").show();
        $("#passwordvalidation").html("Password cannot be empty");
        $("#passwordvalidation").css("color", "rgb(228, 222, 222)");
        password_error = false;
        return false;
      }
      var password1 = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (!password1.test(password_val)) {
        $("#passwordvalidation").show();
        $("#passwordvalidation").html("Please type password in correct format");
        $("#passwordvalidation").css("color", "rgb(228, 222, 222)");
        password_error = false;
        return false;
      } else {
        $("#passwordvalidation").hide();
      }
    }
  
    $("#confirmpassword").keyup(function () {
      confirm_password_validation();
    });
  
    function confirm_password_validation() {
      var confirm_password_val = $("#confirmpassword").val();
      var password_val = $("#password").val();
      if (password_val != confirm_password_val) {
        $("#confirmpasswordvalidation").show();
        $("#confirmpasswordvalidation").html("Make sure password matches");
        $("#confirmpasswordvalidation").css("color", "rgb(228, 222, 222)");
        confirm_password_error = false;
        return false;
      } else {
        $("#confirmpasswordvalidation").hide();
      }
    }
  
    $("#submitvalidation").click(function () {
      username_validation();
      password_validation();
      confirm_password_validation();
      if (
        username_error == true &&
        password_error == true &&
        confirm_password_error == true
      ) {
        return true;
      } else {
        return false;
      }
    });
  });