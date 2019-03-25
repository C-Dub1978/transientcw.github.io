// Intro for the typewriter
const intro =
  "I am an aspiring full stack developer." +
  " I currently work as a junior-level Angular developer\n" +
  " for the U.S. Geological Survey in Golden, CO.\n\n" +
  "I am in my senior year finishing a Bachelors degree" +
  " in web development.\n" +
  "When I am not working, coding, or grinding out school work,\n" +
  " I am skydiving, camping, flying paragliders, and" +
  " enjoying the outdoors.";

// Project objects for the cards in projects section
const projects = [
  {
    title: "The Site:",
    label: "Good Guys Glass",
    description: "Auto and industrial glass repair/replacement",
    about: `This is a project I created using Angular 6 for a friend's auto glass
      business. I built a form on the front-end that submit user
      data to request a quote. The back end is a php file that emails the
      business owner using PHPMailer.`,
    siteUrl: "http://goodguysglass.com",
    imageUrl: "../images/goodGuys.png",
    repoUrl: "https://github.com/TransientCW/good-guys-glass"
  },
  {
    title: "The Site:",
    label: "UHost",
    description: "Mock web hosting company",
    about: `This is a very simple front-end project, which mocks up a fake web hosting
      company. Here I utilized html, css and javascript to create several static
      pages and implemented a custom modal.`,
    siteUrl: "http://cswilson.site/uhost",
    imageUrl: "../images/uhost.png",
    repoUrl: "https://github.com/TransientCW/uHost"
  },
  {
    title: "The Application:",
    label: "NG Fitness Runner",
    description: "Angular 6 application for tracking your workouts",
    about: `This is an Angular 6 application that implements Firebase as a
    back end, along with Material for easy stylistic design. It is currently
    still under construction as I am implementing functionality on the back end
    to save and load each individual user's account data, rather than loading
    data from all users. Please create an account and go shred the gnar at your
    local gym!`,
    siteUrl: "http://cswilson.site/fitness",
    imageUrl: "../images/fitness.png",
    repoUrl: "https://github.com/TransientCW/fitness-app"
  },
  {
    title: "The Application:",
    label: "Kinect 40s",
    description: "Tic tac toe for drunks, winos & alcoholics!",
    about: `This is a game I built using Java and Swing for the UI. I built this
    game in between my first and second semester of college coding courses. It
    is simply a tic-tac-toe style game with graphics, and I wrote custom logic
    to play against the computer. It can also be played in 2 player mode. Grab
    yourself a 40 of malt liquor, download the zip from my github, compile the
    java files, and run thhe MainDriver.class file to play!`,
    siteUrl: null,
    imageUrl: "../images/kinect2.png",
    repoUrl: "https://github.com/TransientCW/Kinect40z"
  },
  {
    title: "The Site:",
    label: "Bio Site",
    description: "Bio site featuring the elusive J.P. Sutjak",
    about: `This is a tribute website for a close friend, J.P., who lives every
    second in his life to get radical. It was an assignment for a web class at
    Bellevue College.`,
    siteUrl: "http://cswilson.site/biosite",
    imageUrl: "../images/biosite.png",
    repoUrl: "https://github.com/TransientCW/bioSite"
  },
  {
    title: "The Tool:",
    label: "Containerized DO Droplet",
    description: "Docker with Nginx reverse proxy",
    about: `This is the current set up for my live portfolio website at
    http://cswilson.site. This is running on a DigitalOcean droplet, and
    utilizes path based routing, via an Nginx reverse proxy, to serve different
    sites and applications based on paths after my base-url. I used Dockerfiles
    and docker-compose files to run the reverse proxy and to route requests to
    different containers running on separate ports.`,
    siteUrl: "http://cswilson.site",
    imageUrl: "../images/docker.png",
    repoUrl: "https://github.com/TransientCW/digitalocean-docker-proxy"
  },
  {
    title: "The Repo:",
    label: "Web 231, Bellevue University",
    description: "Javascript course",
    about: `This was our first javascript course repo in the web development
    program at Bellevue University.`,
    siteUrl: null,
    imageUrl: "../images/noImage.jpg",
    repoUrl: "https://github.com/TransientCW/web-231"
  },
  {
    title: "The Repo:",
    label: "Web 330, Bellevue University",
    description: "Advanced javascript course",
    about: `This was an advanced javascript course repo in the web development
    program at Bellevue University.`,
    siteUrl: null,
    imageUrl: "../images/noImage.jpg",
    repoUrl: "https://github.com/TransientCW/web-330"
  }
];

// TODO: Wrap this DISGUSTING, hideous global variable inside a closure scope
let i = 0;

/**
 * Typewriter function to type the about section into the command prompt
 */
function type() {
  // check for base case to break recursion
  if (i < intro.length) {
    document.getElementById("terminal-prompt").innerHTML += intro.charAt(i);
    i++;
    // recursively call this function every 10 milliseconds to append
    // another character from the into string into the command prompt div
    setTimeout(type, 10);
  } else {
    // base case true, now append the animated terminal cursor to the div
    document.getElementById("terminal-prompt").innerHTML +=
      '<div class="prompt-box"></div>';
  }
}

/**
 * IIFE to create all the cards in the projects section dynamically.
 * To add more projects, add more projects objects to the above array
 */
(function createCards() {
  const projectsContainer = document.getElementById("projects-cards");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.setAttribute("class", "card justify-content-start align-items-center");
    card.setAttribute("data-toggle", "modal");
    card.setAttribute("data-target", "#exampleModal");
    card.addEventListener("click", () => {
      buildModal(project);
    });
    projectsContainer.appendChild(createIndividualCard(card, project));
  });
})();

/**
 *
 * @param {*} card the card div
 * @param {*} project the object from the projects array
 * @returns card, the appended/built card
 * TODO, break this function into smaller functions with specific tasks
 */
function createIndividualCard(card, project) {
  if (card && project) {
    // Create the card title
    const header = document.createElement("h6");
    header.setAttribute("class", "card-title");
    header.innerHTML = project.title;
    // Create the card label
    const label = document.createElement("strong");
    label.setAttribute("class", "card-label");
    label.innerHTML = project.label;
    // Create the figure and figcaption
    const figure = document.createElement("figure");
    const caption = document.createElement("figcaption");
    caption.innerHTML = project.description;
    const image = document.createElement("img");
    image.setAttribute("alt", project.imageUrl);
    image.setAttribute("src", project.imageUrl);
    image.setAttribute("class", "card-image-small");
    // Add caption and image to figure
    figure.appendChild(caption);
    figure.appendChild(image);
    // Add all to the card
    card.appendChild(header);
    card.appendChild(label);
    card.appendChild(figure);
    return card;
  }
}

/**
 *
 * @param {*} project, the project object from the array
 *
 * TODO break this function into smaller functions for specific tasks
 */
function buildModal(project) {
  // Create title for header inside modal
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerHTML = null;
  modalTitle.innerHTML = project.title;

  // Create label for header inside modal
  const label = document.createElement("strong");
  label.setAttribute("class", "card-label");
  label.setAttribute("id", "modal-label");
  label.innerHTML = project.label + "<br>";

  // Get reference to the body of the modal and set style, also clear any
  // existing html
  const modalBody = document.getElementById("modal-body");
  modalBody.setAttribute("style", "padding: 15px;");
  modalBody.innerHTML = null;

  // Create description for modal body
  const description = document.createElement("strong");
  description.setAttribute("class", "card-label");
  description.innerHTML = project.description;

  // Create the about paragraph for modal body
  const about = document.createElement("p");
  about.innerHTML = project.about;

  // Create the figure and append image to it
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.setAttribute("alt", project.imageUrl);
  image.setAttribute("src", project.imageUrl);
  image.setAttribute("class", "card-image-large");
  figure.appendChild(image);

  // Append all of the above to modal body
  modalBody.appendChild(label);
  modalBody.appendChild(description);
  modalBody.appendChild(about);
  modalBody.appendChild(figure);

  // Div specifically for site link (if exists) and repository link
  const linksDiv = document.createElement("div");
  linksDiv.setAttribute("class", "justify-content-end align-items-center");

  if (project.siteUrl) {
    const siteLink = document.createElement("a");
    siteLink.setAttribute("href", project.siteUrl);
    siteLink.setAttribute("target", "blank");
    siteLink.setAttribute("class", "modal-links");
    siteLink.innerHTML = "Site Link";
    linksDiv.appendChild(siteLink);
  }

  const repoLink = document.createElement("a");
  repoLink.setAttribute("href", project.repoUrl);
  repoLink.setAttribute("target", "blank");
  repoLink.setAttribute("class", "modal-links");
  repoLink.innerHTML = "Repository Link";
  linksDiv.appendChild(repoLink);

  // Finally, append the links div to the modal body
  modalBody.appendChild(linksDiv);
}
