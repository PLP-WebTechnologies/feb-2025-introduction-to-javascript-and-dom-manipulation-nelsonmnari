function submitEmail() {
    const email = document.getElementById("emailInput").value;
    const messageArea = document.getElementById("messageArea");

    if (email) {
      messageArea.innerHTML = `<p>Email submitted: <strong>${email}</strong></p><p>Message submitted.</p>`;
    } else {
      messageArea.innerHTML = `<p style="color: red;">Please enter a valid email.</p>`;
    }
    document.getElementById("emailInput").value = "";
    setTimeout(() => {
        messageArea.innerHTML = "";
    }, 5000); 
  }