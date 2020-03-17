function idCard() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let fullName = firstName + " " + " " + lastName;
  let age = document.getElementById("age").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let address = document.getElementById("address").value;

  document.getElementById("postFullName").innerHTML = fullName;
  document.getElementById("postAddress").innerHTML =
    "<b>Address: </b>" + address;

  let numberArray = [];
  numberArray.push(age, phoneNumber);

  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 100) {
      document.getElementById("postAge").innerHTML = "<b>Age:</b> " + age;
    } else if (numberArray[i] > 100) {
      document.getElementById("postPhoneNumber").innerHTML =
        "<b>Phone Number:</b> " + phoneNumber;
    }
  }
}

/* radio buttons - gender check */
function check_value(fieldvalue) {
  switch (fieldvalue) {
    case 1:
      document.getElementById("postImage").innerHTML =
        "<img src='https://cdn3.iconfinder.com/data/icons/human-resources-management/512/business_man_office_male-512.png'>";
      break;
    case 2:
      document.getElementById("postImage").innerHTML =
        "<img src='https://www.stickpng.com/assets/images/585e4bc4cb11b227491c3395.png'>";
      break;
    default:
      return "You are out of this world";
  }
}
