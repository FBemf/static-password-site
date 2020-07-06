const hiddenPage = "hidden.html";
document.addEventListener("DOMContentLoaded", () => {
  let before = document.getElementById("before");
  let after = document.getElementById("after");
  let incorrect = document.getElementById("incorrect");
  let passwordBox = document.getElementById("password");
  let submitButton = document.getElementById("submit");
  let encrypted = fetch(hiddenPage + ".encrypted")
    .then(response => response.text());

  after.style.display = "none";

  passwordBox.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitButton.click();
    }
  });

  submitButton.addEventListener("click", event => {
    event.preventDefault();
    let password = passwordBox.value;
    encrypted.then(data => {
      try {
        let decrypted = sjcl.decrypt(
          password,
          data);
        after.innerHTML = decrypted;
        before.style.display = "none";
        after.style.display = "";
      } catch (e) {
        incorrect.innerText = " [Incorrect] ";
      }
      passwordBox.value = "";
    });
  });
});