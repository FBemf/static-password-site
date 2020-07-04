const hiddenPage = "hidden.html";
window.onload = function () {
  let before = document.getElementById("before");
  let after = document.getElementById("after");
  let incorrect = document.getElementById("incorrect");
  let passwordBox = document.getElementById("password");
  let submitButton = document.getElementById("submit");

  after.style.display = "none";

  passwordBox.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitButton.click();
    }
  });

  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let password = passwordBox.value;
    await fetch(hiddenPage + ".encrypted")
      .then(response => response.text())
      .then(data => {
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
      });
  });
}

