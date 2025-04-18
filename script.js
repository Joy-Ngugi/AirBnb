// // Wait until DOM is ready
// document.addEventListener("DOMContentLoaded", () => {
//     // Booking form handler
//     const bookingForm = document.getElementById("bookingForm");
//     if (bookingForm) {
//       bookingForm.addEventListener("submit", function (e) {
//         e.preventDefault();
  
//         const name = document.getElementById("guestName").value;
//         const email = document.getElementById("guestEmail").value;
//         const room = document.getElementById("roomType").value;
//         const date = document.getElementById("checkIn").value;
  
//         alert(`Thank you, ${name}! Your booking for a ${room} on ${date} has been received. We'll contact you at ${email} shortly.`);
//         bookingForm.reset();
//       });
//     }
  
//     // Contact form handler
//     const contactForm = document.getElementById("contactForm");
//     if (contactForm) {
//       contactForm.addEventListener("submit", function (e) {
//         e.preventDefault();
  
//         const name = document.getElementById("contactName").value;
//         const message = document.getElementById("contactMessage").value;
  
//         alert(`Thank you, ${name}, for reaching out!\nYour message: "${message}" has been received. We'll get back to you soon.`);
//         contactForm.reset();
//       });
//     }
  
//     // Optional: Room filter (by type, price, etc.)
//     const filterRooms = document.getElementById("filterRooms");
//     if (filterRooms) {
//       filterRooms.addEventListener("change", function () {
//         const selected = this.value;
//         const rooms = document.querySelectorAll(".room");
  
//         rooms.forEach((room) => {
//           if (selected === "all" || room.classList.contains(selected)) {
//             room.style.display = "block";
//           } else {
//             room.style.display = "none";
//           }
//         });
//       });
//     }
//   });
  

//   document.addEventListener("DOMContentLoaded", () => {
//     const hero = document.querySelector(".hero");
  
//     const images = [
//       "images/1.jpeg",
//       "images/2.jpeg",
//       "images/3.jpeg",
//       "images/4.jpeg",
//       "images/5.jpeg"
//     ];
  
//     let index = 0;
  
//     function changeBackground() {
//       hero.style.backgroundImage = `url('${images[index]}')`;
//       index = (index + 1) % images.length;
//     }
  
//     // Initial background
//     changeBackground();
  
//     // Change every 5 seconds
//     setInterval(changeBackground, 5000);
//   });
  

// document.addEventListener("DOMContentLoaded", function () {
//     const toggle = document.getElementById("menu-toggle");
//     const navbar = document.getElementById("navbar");
  
//     toggle.addEventListener("click", () => {
//       navbar.classList.toggle("active");
//     });
//   });
    
document.addEventListener("DOMContentLoaded", () => {
    // Booking form handler
    const bookingForm = document.getElementById("formBooking");
    if (bookingForm) {
      bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const room = document.getElementById("room").value;
        const date = document.getElementById("checkin").value;
  
        alert(`Thank you, ${name}! Your booking for a ${room} on ${date} has been received. We'll contact you at ${email} shortly.`);
        bookingForm.reset();
      });
    }
  
    // Contact form handler
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("fullname").value;
        const message = document.getElementById("message").value;
  
        alert(`Thank you, ${name}, for reaching out!\nYour message: "${message}" has been received. We'll get back to you soon.`);
        contactForm.reset();
      });
    }
  
    // Room filter
    const filterRooms = document.getElementById("filterRooms");
    if (filterRooms) {
      filterRooms.addEventListener("change", function () {
        const selected = this.value;
        const rooms = document.querySelectorAll(".room");
  
        rooms.forEach((room) => {
          if (selected === "all" || room.classList.contains(selected)) {
            room.style.display = "block";
          } else {
            room.style.display = "none";
          }
        });
      });
    }
  
    // Hero image slider
    const hero = document.querySelector(".hero");
    if (hero) {
      const images = [
        "images/1.jpeg",
        "images/2.jpeg",
        "images/3.jpeg",
        "images/4.jpeg",
        "images/5.jpeg"
      ];
  
      let index = 0;
  
      function changeBackground() {
        hero.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
      }
  
      changeBackground();
      setInterval(changeBackground, 5000);
    }
  
    // Navbar toggle
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
  
    if (toggle && navbar) {
      toggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });
    }
  });
  