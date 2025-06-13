document.addEventListener("DOMContentLoaded", () => {
    const tagline = document.querySelector("header p");
    const rootStyles = getComputedStyle(document.documentElement);
    const colours = [
      rootStyles.getPropertyValue("--dark-blue-2").trim(),
      rootStyles.getPropertyValue("--light-blue-1").trim(),
      rootStyles.getPropertyValue("--dark-teal-1").trim(),
      rootStyles.getPropertyValue("--green-1").trim(),
      rootStyles.getPropertyValue("--dark-green-1").trim(),
      rootStyles.getPropertyValue("--yellow-1").trim(),
      rootStyles.getPropertyValue("--orange-1").trim(),
      rootStyles.getPropertyValue("--dark-brown-1").trim(),
      rootStyles.getPropertyValue("--dark-red-1").trim(),
      rootStyles.getPropertyValue("--red-1").trim(),
      rootStyles.getPropertyValue("--light-red-1").trim()
    ];
  
    tagline.style.transition = "color 0.8s ease";
  
    setInterval(() => {
      const randomColour = colours[Math.floor(Math.random() * colours.length)];
      tagline.style.color = randomColour;
    }, 1000);
  });  