const intro =
  "I am an aspiring full stack developer." +
  " I currently work as a junior-level Angular developer\n" +
  " for the U.S. Geological Survey in Golden, CO.\n\n" +
  "I am in my senior year finishing a Bachelors degree" +
  " in web development.\n" +
  "When I am not working, coding, or grinding out school work,\n" +
  " I am skydiving, camping, flying paragliders, and" +
  " enjoying the outdoors.";

const projects = [
  {
    label: "Good Guys Glass",
    description: "Auto and industrial glass repair/replacement",
    url: "http://goodguysglass.com",
    imageUrl: ""
  }
];

let i = 0;

function type() {
  if (i < intro.length) {
    document.getElementById("terminal-prompt").innerHTML += intro.charAt(i);
    i++;
    setTimeout(type, 10);
  } else {
    document.getElementById("terminal-prompt").innerHTML +=
      '<div class="prompt-box"></div>';
  }
}

(function createCards() {})();

function createCard(card) {
  const div = document.createElement("div");
}
