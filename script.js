function addOnClickStuff() {
  var containers = document.getElementsByClassName("meme-container");
  var explanations = document.getElementsByClassName("meme-explanation");
  var len = containers.length;
  const explanationIndex = 3;
  for (var index = 0; index < len; index++) {
    containers[index].addEventListener("click", (event) => {
      let explanation = event.currentTarget.childNodes[explanationIndex];
      if (explanation.style.display === "none") {
        event.currentTarget.childNodes[explanationIndex].style.display =
          "block";
      } else {
        event.currentTarget.childNodes[explanationIndex].style.display = "none";
      }
    });
  }
}

addOnClickStuff();
