// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Hey there! Its your favorite web dev here. This is the best company ever!!!!",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Working here is amazing. Doing what I love to do.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Just started here but this company has been nothing short of my expectations!",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "One thing about being the boss is that you get to choose the amazing people you work with. They're the best!",
  },
];

/*select items */
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item 
let currentItem = 0;

//load intial item 
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});


// show person based on item 
function showPerson() {
  const item = reviews[currentItem];
  img.src = reviews[currentItem].img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  // So error message doesnt pop up when we  
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

//show previous person
prevBtn.addEventListener('click', function() {
  currentItem--;
   // So error message doesnt pop up when we  
   if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});


// Random button
randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(); 
});