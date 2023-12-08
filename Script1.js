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
const thirdSection = document.querySelector(".section3")
const forthSection = document.querySelector(".section4")
const fifthSection = document.querySelector(".user-profile-update")

const sideBar = document.querySelectorAll(".side-bar a.menu-items");
  sideBar.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains('request')) {
        firstSection.style.display = "block";
        secondSection.style.display = "none";
        thirdSection.style.display = "none";
        forthSection.style.display = "none";
        fifthSection.style.display = "none";
        firstSection.style.display = 'flex';
        firstSection.style.placeContent = "center";
      } else if (tab.classList.contains("view")) {
        secondSection.style.display = "block";
        firstSection.style.display = "none";
        thirdSection.style.display = "none";
        forthSection.style.display = "none";
        fifthSection.style.display = "none";
       secondSection.style.marginInline = "12rem" 
       secondSection.style.marginBlock = "3rem" 
      }else if (tab.classList.contains("dashboard")) {
        thirdSection.style.display = "block";
        secondSection.style.display = "none";
        firstSection.style.display = "none";
        forthSection.style.display = "none";
        fifthSection.style.display = "none";
      }else if (tab.classList.contains("payment")) {
        forthSection.style.display = "block";
        thirdSection.style.display = "none";
        secondSection.style.display = "none";
        firstSection.style.display = "none";
        fifthSection.style.display = "none";
        fifthSection.style.marginInline = "3rem";
      }else if (tab.classList.contains("profile")) {
        fifthSection.style.display = "block";
        forthSection.style.display = " none";
        thirdSection.style.display = "none";
        secondSection.style.display = "none";
        firstSection.style.display = "none";
        fifthSection.style.marginInline = "11rem" 
       fifthSection.style.marginBlock = "3rem" 
      }
      
      document.querySelector(".list a.active-class").classList.remove("active-class");
      tab.classList.add('active-class');
    });
  });;

// MAKE VISIBLE


