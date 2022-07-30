function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle)



  //   Typical loop={Infinity} steps={[
  //     "A Confident Quick Learner 🔴 ",1000,
  //     "Enthusiastic Programmer ⚡ ",1000,
  //     "Challenging Problem Solver 😎",1000,
  //     "Passionate Computer Science Student 💻",1000,
  // ]}

  var myVar = setInterval(sTimer, 1000); 
  
  function sTimer() { 
      document.getElementById("prop").innerHTML += "<p>Enthusiastic Programmer</p>"; 
      clearInterval(myVar,1000);
      

      
  } 

/* later */


  var typed = new Typed(".typing", {
    strings: ["Passionate Computer Science and Engineering Student", "Quick learner", "Enthusiastic Programmer", "Great Listener"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});