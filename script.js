// GREETINGS

function changeText() {
  let greeting = "";
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 0 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 16) {
    greeting = "Good Afternoon";
  } else if (hour >= 16 && hour < 19) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  document.querySelector("#myText").textContent = greeting;
}

changeText();
setInterval(changeText, 3600000);

// ACTIVE CLASS

const firstSection = document.querySelector(".first-section")
const secondSection = document.querySelector(".second-section")
const sideBar = document.querySelectorAll(".side-bar a.menu-items");
  sideBar.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains('request')) {
        firstSection.style.display = "block";
        secondSection.style.display = "none";
        firstSection.style.display = 'flex';
        firstSection.style.placeContent = "center";
      } else if (tab.classList.contains("view")) {
        secondSection.style.display = "block";
        firstSection.style.display = "none";
       secondSection.style.marginInline = "9rem" 
       secondSection.style.marginBlock = "3rem" 
      }
      
      document.querySelector(".list a.active-class").classList.remove("active-class");
      tab.classList.add('active-class');
    });
  });;

// MAKE VISIBLE


