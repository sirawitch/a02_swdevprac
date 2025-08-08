function checkData() {
  let fname = document.getElementById("firstname");
  let lname = document.getElementById("lastname");
  let tel = document.getElementById("tel");
  let npet = document.getElementById("petnumber");
  let checkbox = document.getElementById("checkbox");
  if (fname == "" || lname == "" || tel == "") {
    alert("First name, Last name and Tel No. can't be empty");
  }
  if (npet < 0 || npet > 100) {
    alert("Number of pets only number between 0 and 100");
  }
  console.log(checkbox);
}
