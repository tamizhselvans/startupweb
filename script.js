document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("mobilenumber").value.trim();
  const email = document.getElementById("mailid").value.trim();
  const message = document.getElementById("message").value.trim();

  
  if (!name || !phone || !email || !message) {
    alert("⚠️ Please fill all the fields before submitting!");
    return;
  }

 
  const data = { name, phone, email, message };
  console.log("Form Data:", data);


  alert("✅ Message sent successfully!");
});
