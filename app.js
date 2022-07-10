// local reviews data
const reviews = [
  {
    id: 1,
    name: "Mazda RX-7",
    job: "Sports Car",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tuned_Mazda_RX-7_Type_RB_%28GF-FD3S%29_front.jpg/280px-Tuned_Mazda_RX-7_Type_RB_%28GF-FD3S%29_front.jpg",
    text:
      "The Mazda RX-7 is a front-engine, rear-wheel-drive, rotary engine-powered sports car that was manufactured and marketed by Mazda from 1978 to 2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine.The first generation of the RX-7, SA (early) and FB (late), was a two-seater 2 door hatchback coupé. It featured a 12A carbureted rotary engine as well as the option for a 13B with electronic fuel injection in later years. ",
  },
  {
    id: 2,
    name: "Nissan Cefiro A31",
    job: "Mid-size",
    img:
      "https://images.squarespace-cdn.com/content/v1/52d46dd9e4b0f63bcb07fa01/1576620160360-NXCCLD7THD4E0DFDVFO2/Team+Cream+Cefiro-628-Edit-2.jpg?format=1500w",
    text:
      "The Nissan Cefiro (Japanese: 日産・セフィーロ, Hepburn: Nissan Sefīro) is a front-engine, five passenger, mid-size passenger car manufactured and marketed by Nissan Motors over three generations. Almost all Cefiro's were marketed as four-door sedans, though a five-door wagon body style was briefly available (1997-2000). In most cases, the Cefiro used Nissan's VQ six-cylinder engines, named Ward's 10 Best Engines more than ten years running.",
  },
  {
    id: 3,
    name: "Toyota Corolla AE86",
    job: "Sport Compact",
    img:
      "https://www.motortrend.com/uploads/sites/25/2016/04/Top-AE86-Corollas-Masataka-Ikeda-83-Sprinter-Trueno-03.jpg",
    text:
      "The AE86 series of the Toyota Corolla Levin and Toyota Sprinter Trueno are small, front-engine/rear-wheel-drive models within the front-engine/front-wheel-drive fifth generation Corolla (E80) range — marketed by Toyota from 1983 to 1987 in coupé and liftback configurations. ",
  },
  {
    id: 4,
    name: "Toyota Chaser",
    job: "Mid-Size",
    img:
      "https://images.cdn.circlesix.co/image/2/1200/700/5/uploads/posts/2021/04/dce91c6503a5656aa0fdcbb30995b679.jpeg",
    text:
      "The Toyota Chaser is a mid-size car produced by Toyota in Japan. Most Chasers are four-door sedans and hardtop sedans; a two-door hardtop coupé was available on the first generation only. It was introduced on the 1976 Toyota Corona Mark II platform, and was sold new by Toyota at Toyota Vista Store dealerships only in Japan, together with the Toyota Cresta.",
  },
  {
    id: 5,
    name: "Honda Civic eg6",
    job: "Compact Car",
    img:
      "https://img-9gag-fun.9cache.com/photo/aKjx20b_460s.jpg",
    text:
      "The fifth generation Honda Civic is an automobile produced by Honda from 1991 until 1995. It debuted in Japan on September 9, 1991. At its introduction, it won the Car of the Year Japan award for the second time. Fifth generation cars were larger than their predecessors, had more aerodynamic bodies, and the wheelbase was increased to 257 cm (101.3 inches)—for the three-door hatchback—and to 262 cm (103.2 inches)—for the four-door sedan.",
  },
];


//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded' , function(){
  showPerson(currentItem);
});

//show info based on item

function showPerson(number){
  const item = reviews[number];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//next button

nextBtn.addEventListener('click' , function(){
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
})

prevBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1; 
  }
  showPerson(currentItem);
})

randomBtn.addEventListener('click', function(){
  currentItem =  Math.floor(Math.random()*reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
})

