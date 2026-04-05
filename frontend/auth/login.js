function login() {
      const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

          fetch("http://localhost:3000/auth/login", {
              method: "POST",
                  headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ username, password })
                        })
                          .then(res => res.json())
                            .then(data => {
                                if (data.token) {
                                      localStorage.setItem("token", "Bearer " + data.token);

                                            if (data.role === "admin") {
                                                    window.location = "../admin.html";
                                                          } else {
                                                                  window.location = "../user-dashboard.html";
                                                                        }
                                                                            } else {
                                                                                  alert("Login failed");
                                                                                      }
                                                                                        });
                                                                                        }
}