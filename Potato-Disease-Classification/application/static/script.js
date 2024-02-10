const randomNumberGenerator = max => Math.floor(Math.random() * max)

const createBubble = (top = 0, left = 0, maxPadding = 15, minPadding = 2, r = 255, g = 255, b = 255) => {

  const padding = randomNumberGenerator(maxPadding)
  
  const div = document.createElement('div')
  
  div.style.padding = `12px`
  let green = randomNumberGenerator(g)
if(green<80){
green = 255-green
}
  div.style.background = `rgba(0, ${green}, 0,0.8)`

  div.classList.add('circle')
  
  div.style.top = `${top}px`
  div.style.left = `${left}px`
  
  document.body.appendChild(div)
}

document.onmousemove = e => createBubble(e.clientY, e.clientX)

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let navbar = document.getElementsByTagName('header');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    // text.style.marginTop = value *2.5 + 'px';   
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    // hill1.style.top = value * 1 + 'px';
    tree.style.left = value * -1.7 + 'px';
    // navbar.style.backgroundColor=value + "#013108";
    
});

document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("main-header");
  let prevScrollPos = window.pageYOffset;

  // Change header color on scroll
  window.addEventListener("scroll", function() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 100) {
      // Scrolling down beyond 350px: add background color
      header.style.backgroundColor = "rgba(203, 248,201, 0.9)"; // New header color
    } else {
      // Scrolling up or not beyond 350px: remove background color
      header.style.backgroundColor = "transparent"; // or use "initial" for the default color
    }

    prevScrollPos = currentScrollPos;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.querySelector('.scroll-text');
    let prevScrollPos = window.pageYOffset;
  
    // Change text visibility on scroll
    window.addEventListener("scroll", function() {
      const currentScrollPos = window.pageYOffset;
  
      if (currentScrollPos > 250) {
        // Scrolling down: hide text
        scrollText.classList.add('hide');
      } else {
        // Scrolling up: show text
        scrollText.classList.remove('hide');
      }
  
      prevScrollPos = currentScrollPos;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const loadingBuffer = document.getElementById("loadingBuffer");
    const content = document.querySelector(".Home-wrap");
  
    // Simulate content loading (replace this with your actual content loading logic)
    window.addEventListener("load", function() {
      // Hide the loading buffer
      loadingBuffer.style.display = "none";
      
      // Show the content with a fade-in effect
      content.style.opacity = 1;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.querySelector('.scrolling');
    let prevScrollPos = window.pageYOffset;
  
    // Change text visibility on scroll
    window.addEventListener("scroll", function() {
      const currentScrollPos = window.pageYOffset;
  
      if (currentScrollPos > 75) {
        // Scrolling down: hide text
        scrollText.classList.add('hide');
      } else {
        // Scrolling up: show text
        scrollText.classList.remove('hide');
      }
  
      prevScrollPos = currentScrollPos;
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.querySelector('.scrolling1');
    let prevScrollPos = window.pageYOffset;
  
    // Change text visibility on scroll
    window.addEventListener("scroll", function() {
      const currentScrollPos = window.pageYOffset;
  
      if (currentScrollPos >25) {
        // Scrolling down: hide text
        scrollText.classList.add('hide');
      } else {
        // Scrolling up: show text
        scrollText.classList.remove('hide');
      }
  
      prevScrollPos = currentScrollPos;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
  const revealItems = document.querySelectorAll('.reveal-item');

  function revealOnScroll() {
    revealItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight / 1.2) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  // Initial check in case items are already in view when the page loads
  revealOnScroll();
});

//carbon footprint
function startSurvey() {
  document.getElementById("def").style.display = "none";
  document.getElementById("calculator").style.display = "block";
  scrollTo(0, 5);
}

function calculate() {
  if (allComplete()) {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("reducefootprint").style.display = "block";
    scrollTo(0, 10);
    var totalscore = 0;
    var sizescore = sizeScore();
    var locationscore = locationScore();
    var dietscore = dietScore();
    var foodscore = foodScore();
    var trashscore = trashScore();
    var recyclescore = recycleScore();
    var travelscore = travelScore();
    totalscore += sizescore;
    totalscore += locationscore;
    totalscore += dietscore;
    totalscore += foodscore;
    totalscore += trashscore;
    totalscore += recyclescore;
    totalscore += travelscore;
    document.getElementById("totalscore").innerHTML = `Your 
score was: ${totalscore}`;
    showFootSize(totalscore);
  } else {
    alert("Please answer all of the questions.");
  }
}

function showFootSize(score) {
  document.getElementById("footsize").style.display = "block";
  if (score >= 21) document.getElementById("bigfoot").style.display = "block";
  else if (score >= 13)
    document.getElementById("mediumfoot").style.display = "block";
  else document.getElementById("littlefoot").style.display = "block";
}

function allComplete() {
  if (!fourChecked("size")) return false;
  if (!fourChecked("location")) return false;
  if (!fourChecked("diet")) return false;
  if (!fourChecked("food")) return false;
  if (!threeChecked("trash")) return false;
  if (!threeChecked("recycle")) return false;
  if (!fourChecked("travel")) return false;
  else return true;
}

function sizeScore() {
  var sizes = document.getElementsByName("size");
  var score = 0;
  if (sizes[0].checked) score = 1;
  if (sizes[1].checked) score = 2;
  if (sizes[2].checked) score = 3;
  if (sizes[3].checked) score = 4;
  return score;
}

function fourChecked(name) {
  var list = document.getElementsByName(name);
  if (list[0].checked) return true;
  if (list[1].checked) return true;
  if (list[2].checked) return true;
  if (list[3].checked) return true;
  return false;
}

function threeChecked(name) {
  var list = document.getElementsByName(name);
  if (list[0].checked) return true;
  if (list[1].checked) return true;
  if (list[2].checked) return true;
  return false;
}

function locationScore() {
  var locations = document.getElementsByName("location");
  var score = 0;
  if (locations[0].checked) score = 4;
  if (locations[1].checked) score = 2;
  if (locations[2].checked) score = 3;
  if (locations[3].checked) score = 1;
  return score;
}

function dietScore() {
  var diets = document.getElementsByName("diet");
  var score = 0;
  if (diets[0].checked) score = 2;
  if (diets[1].checked) score = 4;
  if (diets[2].checked) score = 1;
  if (diets[3].checked) score = 3;
  return score;
}

function foodScore() {
  var foods = document.getElementsByName("food");
  var score = 0;
  if (foods[0].checked) score = 2;
  if (foods[1].checked) score = 3;
  if (foods[2].checked) score = 1;
  if (foods[3].checked) score = 4;
  return score;
}

function trashScore() {
  var trashes = document.getElementsByName("trash");
  var score = 0;
  if (trashes[0].checked) score = 1;
  if (trashes[1].checked) score = 2;
  if (trashes[2].checked) score = 3;
  return score;
}

function recycleScore() {
  var recycles = document.getElementsByName("recycle");
  var score = 0;
  if (recycles[0].checked) score = 1;
  if (recycles[1].checked) score = 2;
  if (recycles[2].checked) score = 3;
  return score;
}

function travelScore() {
  var travels = document.getElementsByName("travel");
  var score = 0;
  if (travels[0].checked) score = 4;
  if (travels[1].checked) score = 2;
  if (travels[2].checked) score = 3;
  if (travels[3].checked) score = 1;
  return score;
}
