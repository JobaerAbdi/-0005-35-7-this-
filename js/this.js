// console.log(this);
const river = {
  name: "Padma",
  id: 01,
  location: "Bangladesh",
  isBig: true,
  hilshaPrice: 1500,

  getHilsha: function () {
    console.log(this);
    return `A lot of hilsha caught in the ${this.name} river of ${this.location}`;
    //      A lot of hilsha caught in the Padma river of Bangladesh
  },

  // getHilsha : ()=>{
  //     return `A lot of hilsha caught in the ${this.name} river of ${this.location}`;
  //     //      A lot of hilsha caught in the undefined river of undefined
  //  },

  othersRiver: ["Jamuna", "Megna", "Surma"],
  bromuputroRiver: {
    length: "125km",
    caughtHilsha: false,
    deep: "Average",
  },

  arrowFun: () => {
    console.log(this);
  },

  arrowNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
  },

  riverInfo01: function () {
    return `${this.name} is big from ${this.othersRiver}`;
  },

  riverInfo02: function () {
    return `${this.name} is big from ${this.othersRiver[1]}`;
  },

  riverInfo03: function () {
    return `${this.name} is ${this.getHilsha()}`;
    // Padma is A lot of hilsha caught in the Padma river of Bangladesh
  },

  riverInfo04: function (number, country) {
    return `${this.name} is ${number} no river of ${country}`;
    // Padma is 1 no river of Bangladesh
  },

  riverInfo05: function (money, discount) {
    this.hilshaPrice = this.hilshaPrice - money + discount;
    return this.hilshaPrice;
    // 1200
  },
};


const pond = {
  name: "Kasspukur",
  id: 02,
  location: "Betagi",
  isBig: false,
  hilshaPrice: 2500,
};

 river.getHilsha();    // All Access form river.

// pond.getHilsha = river.getHilsha
// pond.getHilsha();   // All access form pond

// river.arrowFun(); // window

// river.arrowNested();  // window

function  onclickFunction(){
  console.log(this);
}

document.getElementById('btn-event').addEventListener('click',function(){
  console.log(this);
})