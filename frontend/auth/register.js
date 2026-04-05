function registerUser() {
      const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

          fetch("http://localhost:3000/auth/register", {
              method: "POST",
                  headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ username, password })
                        })
                          .then(res => res.json())
                            .then(data => {
                                alert("Registered");
                                    window.location = "login.html";
                                      });
                                      }
}