//定义变量

const bgPath = [],
  bodyPath = [],
  facePath = [],
  foodPath = [],
  hairPath = [],
  armPath = [];
const imgs = {
  bg: [],
  body: [],
  face: [],
  food: [],
  hair: [],
  arm:[],
  ticket:[]
};
let randomList = [];

//onload
function onload() {
  // document.getElementById('loading').style.display='flex';
  for (let i = 1; i < 13; i++) {
    bgPath.push(`bg/${i}.png`);
    facePath.push(`face/${i}.png`);
    foodPath.push(`food/${i}.png`);
    hairPath.push(`hair/${i}.png`);
  }
  bodyPath.push(`body/1.png`);

  function perloadImg() {
    for (let i = 0; i < 12; i++) {
      let tmpPic = new Image();
      tmpPic.src = bgPath[i];
      imgs.bg.push(tmpPic);

      let tmpPic1 = new Image();
      tmpPic1.src = bodyPath[0];
      // imgs.body.push(tmpPic1);

      let tmpPic2 = new Image();
      tmpPic2.src = facePath[i];
      imgs.face.push(tmpPic2);

      let tmpPic3 = new Image();
      tmpPic3.src = foodPath[i];
      imgs.food.push(tmpPic3);

      let tmpPic4 = new Image();
      tmpPic4.src = hairPath[i];
      imgs.hair.push(tmpPic4);
    }
    for (let i = 1; i < 11; i++) {
      let tmpPic = new Image();
      tmpPic.src = `ticket/${i}.png`;
      imgs.ticket.push(tmpPic);
    }
    for (let i = 1; i < 5; i++) {
      armPath.push(`arm/${i}.png`);
      let tmpPic = new Image();
      tmpPic.src = `arm/${i}.png`;
      imgs.arm.push(tmpPic);
    }
    // console.log(imgs);
  }
  perloadImg();
  document.getElementById("loading").style.display = "none";
}

//点击事件
function clickHandler() {
  randomList = [];
  for (let i = 0; i < 6; i++) {
    randomList.push(_.random(0, 11));
  }
  let bodyIndex = _.random(0, 3);
  let foodType = [
    [1, 7, 11, 12],
    [10, 5, 3],
    [2, 9],
    [6, 8],
  ];
  randomList[3] = _.shuffle(foodType[bodyIndex])[0] - 1;
  console.log(randomList[3]);
  console.log(bodyIndex);
  document.getElementById("bg").setAttribute("src", bgPath[randomList[0]]);
  document.getElementById("body").setAttribute("src", bodyPath[0]);
  document.getElementById("face").setAttribute("src", facePath[randomList[2]]);
  document.getElementById("food").setAttribute("src", foodPath[randomList[3]]);
  document.getElementById("hair").setAttribute("src", hairPath[randomList[4]]);
  document.getElementById("arm").setAttribute("src", armPath[bodyIndex]);
  document
    .getElementById("ticketimg")
    .setAttribute("src", `ticket/${_.random(1, 10)}.png`);
  // console.log(bgPath,bodyPath,facePath,foodPath,hairPath);
  let h = document.getElementById("ticketimg").offsetHeight;
  let imga = document.getElementById("imgarea");

  imga.innerHTML = "";
  imga.style.top = `-${h - h * 0.11}px`;
  imga.style.height = `${h * 0.2}px`;
  imga.style.width = `${h * 0.22}px`;

  let bg = document.createElement("img");
  bg.src = bgPath[randomList[0]];
  imga.appendChild(bg);
  let body = document.createElement("img");
  body.src = bodyPath[0];
  imga.appendChild(body);
  let food = document.createElement("img");
  food.src = foodPath[randomList[3]];
  imga.appendChild(food);
  let face = document.createElement("img");
  face.src = facePath[randomList[2]];
  imga.appendChild(face);
  let hair = document.createElement("img");
  hair.src = hairPath[randomList[4]];
  imga.appendChild(hair);
  let arm = document.createElement("img");
  arm.src = armPath[bodyIndex];
  imga.appendChild(arm);
}
