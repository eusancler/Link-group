function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/sancler-sorrindo.jpeg")
  } else img.setAttribute("src", "./assets/sancler-serio.jpeg")

   
    if (html.classList.contains("light")) {
      alert("tu gosta do mais claro né !")
    } else {
      alert("tu gosta do mais escuro né !")
    }
  }

