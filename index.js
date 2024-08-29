const snakeImage="https://img.freepik.com/premium-vector/cute-snake-cartoon-style-vector-illustration-white-background_1023984-4180.jpg?w=900";
const waterImage="https://thumbs.dreamstime.com/b/isolated-happy-drop-water-icon-isolated-happy-drop-water-icon-vector-illustration-design-126805168.jpg";
const gunImage="https://static.vecteezy.com/system/resources/previews/008/276/951/non_2x/revolver-color-icon-pistol-gun-firearm-isolated-illustration-vector.jpg";


function computerSideGenerator(){
  let arr=['snake','water','gun'];
  let randomIndex = Math.floor(Math.random()*arr.length);
  let imgComp=document.getElementById("computer-image");
  if(arr[randomIndex]=='snake'){
    imgComp.src="https://img.freepik.com/premium-vector/cute-snake-cartoon-style-vector-illustration-white-background_1023984-4180.jpg?w=900";
  }
  if(arr[randomIndex]=='water'){
    imgComp.src="https://thumbs.dreamstime.com/b/isolated-happy-drop-water-icon-isolated-happy-drop-water-icon-vector-illustration-design-126805168.jpg";
  }
  if(arr[randomIndex]=='gun'){            imgComp.src="https://static.vecteezy.com/system/resources/previews/008/276/951/non_2x/revolver-color-icon-pistol-gun-firearm-isolated-illustration-vector.jpg";
  }
  return arr[randomIndex] ;
  
}


function snakeFunction() {
  let snakeImage = document.getElementById("user-image");
  snakeImage.src = "https://img.freepik.com/premium-vector/cute-snake-cartoon-style-vector-illustration-white-background_1023984-4180.jpg?w=900";

  let computerVal = computerSideGenerator();
  if (computerVal == 'snake') {
    showCard("It's a tie!");
  }
  if (computerVal == 'water') {
    showCard("Congratulations,You Win a Point!", function() {
      let score = document.getElementById("win-score");
      let numScore = parseInt(score.innerHTML);
      numScore++;
      score.innerHTML = numScore;
    });
  }
  if (computerVal == 'gun') {
    showCard("Better Luck Next Time!", function() {
      let score = document.getElementById("lose-score");
      let numScore = parseInt(score.innerHTML);
      numScore++;
      score.innerHTML = numScore;
    });
  }
}



function gunFunction() {
  let gunImage = document.getElementById("user-image");
  gunImage.src = "https://static.vecteezy.com/system/resources/previews/008/276/951/non_2x/revolver-color-icon-pistol-gun-firearm-isolated-illustration-vector.jpg";

  let computerVal = computerSideGenerator();
  if (computerVal == 'gun') {
    showCard("It's a tie!");
  }
  if (computerVal == 'snake') {
    showCard("Congratulations,You Win a Point!", function() {
      let score = document.getElementById("win-score");
      let numScore = parseInt(score.innerHTML);
      numScore++;
      score.innerHTML = numScore;
    });
  }
  if (computerVal == 'water') {
    showCard("Better Luck Next Time!", function() {
      let score = document.getElementById("lose-score");
      let numScore = parseInt(score.innerHTML);
      numScore++;
      score.innerHTML = numScore;
    });
  }
}


function waterFunction() {
  let waterImage = document.getElementById("user-image");
  waterImage.src = "https://thumbs.dreamstime.com/b/isolated-happy-drop-water-icon-isolated-happy-drop-water-icon-vector-illustration-design-126805168.jpg";

  let computerVal = computerSideGenerator();
  if (computerVal == 'water') {
    showCard("It's a tie!");
  }
  if (computerVal == 'gun') {
    showCard("Congratulations,You Win a Point!", function() {
      let score = document.getElementById("win-score");
      let numScore = parseInt(score.innerHTML);
      numScore++;
      score.innerHTML = numScore;
    });
  }
  if (computerVal == 'snake') {
    showCard("Better Luck Next Time!", function() {
      let score = document.getElementById("lose-score");
      let numScore = parseInt(score.innerHTML);
      numScore++;
      score.innerHTML = numScore;
    });
  }
}


function showCard(mssg, callback) {
  var card = document.createElement("div");
  card.className = "score-card";
  card.textContent = mssg;
  card.id = "score-card";
  card.style.width = "500px";
  card.style.height = "150px";
  card.style.padding = "20px";
  card.style.backgroundColor = "#033450";
  card.style.color = "#CDE4F1";
  card.style.fontFamily = "poppins";
  card.style.fontSize = "50px";
  card.style.textAlign = "center";
  card.style.borderRadius = "10px";
  card.style.boxShadow= "1px 3px 102px 51px rgba(255,255,255,0.99)";
  card.style.zIndex = 2;
  card.style.position = "fixed";
  card.style.left = "50%";
  card.style.top = "50%";
  card.style.transform = "translate(-50%, -50%)";

  document.getElementById("main-container").appendChild(card);

  setTimeout(function() {
    card.remove();
    if (callback) {
      callback(); 
    }
  }, 500);
}



