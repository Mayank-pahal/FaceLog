function checkCredentials(event) {
  event.preventDefault();
    const username = document.getElementById("username-id").value;
    console.log(username);
    const password = document.getElementById("password-id").value;
    console.log(password);
    if (username === "admin@gmail.com" && password === "water") {
      window.location.href = "second.html";
    } else {
      alert("Invalid Credentials");
    }
  }
const formSubmitButton = document.querySelector("button[type='submit']");
formSubmitButton.addEventListener("click", checkCredentials);