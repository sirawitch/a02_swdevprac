function checkData() {
  let fname = document.getElementById("firstname").value.trim();
  let lname = document.getElementById("lastname").value.trim();
  let tel = document.getElementById("tel").value.trim();
  let npet = parseInt(document.getElementById("petnumber").value);
  let checkbox = document.getElementById("checkbox");

  if (fname === "" || lname === "" || tel === "") {
    alert("First name, Last name and Tel No. can't be empty");
    return;
  }

  if (isNaN(npet) || npet < 0 || npet > 100) {
    alert("Number of pets must be a number between 0 and 100");
    return;
  }
  if (!checkbox.checked) {
    alert(
      "Please note that submitting this form only expresses your interest. It does not guarantee that you will be selected to adopt a dog."
    );
    return;
  }

}
