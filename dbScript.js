const Form = document.querySelector("form");
const Btn = document.getElementById('request')

Btn.addEventListener("submit", async function (event) {
  event.preventDefault();

  const Request = Form.requestType.value;
  const Location = Form.location.value;
  const Date = Form.date.value;
  const Time = Form.time.value;

  console.log(Request, Location, Date, Time); 

  try {
    const uidCookie = getCookie("uid");
    const response = await fetch(`https://trash-point.onrender.com/request/send/${uidCookie}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Request, Location, Date, Time }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data.success) {
      window.location.href = "https://trashpoint.vercel.app/dashboardd.html";
      console.log(data);
    } else {
      // console.log("Message send failed:", data.message);
      displayErrorMessage(data.message);
    }
  } catch (error) {
    console.log("An error occurred:", error);
    displayErrorMessage(error.message);
  }

  function displayErrorMessage(message) {
    document.getElementById("errorMessage").innerText = message;
  }
});


// async function submitForm() {
//     const requestType = document.getElementById('requestType').value;
//     const location = document.getElementById('location').value;
//     const date = document.getElementById('date').value;
//     const time = document.getElementById('time').value;


//     const formData = {
//       requestType,
//       location,
//       date,
//       time
//     };

//     try {
//         const uidCookie = getCookie("uid");
//       const response = await fetch(`https://trash-point.onrender.com/request/send/${uidCookie}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log(data);

//       if (data.success) {
//         // Handle success, e.g., redirect to a success page
//         window.location.href = "https://trashpoint.vercel.app/dashboardd.html";
//       } else {
//         // Handle failure, e.g., display an error message
//         return alert(data.message);
        
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle the error, e.g., display a generic error message
//       alert('An error occurred. Please try again.');
//     }
//   }