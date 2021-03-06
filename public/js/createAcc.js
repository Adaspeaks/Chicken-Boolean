const signupFormHandler = async (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
      }),
      headers: { "content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("signup").addEventListener("submit", signupFormHandler);
