const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");

let count = 0;
let count2 = 0;
let count3 = 0;
btn1.addEventListener("click", () => {
    swiBtn();
});
btn2.addEventListener("click", () => {
    swiBtn2();
});
btn3.addEventListener("click", () => {
    swiBtn3();
});

const swiBtn = () => {
    if (count == 0) {
        box1.style.paddingBottom = "10rem";
        para1.style.visibility = "visible";
        count = 1;
        console.log(count);
    }
    else {
        box1.style.paddingBottom = "0rem";
        para1.style.visibility = "hidden";
        count = 0;
        console.log(count);
    }
}
const swiBtn2 = () => {
    if (count2 == 0) {
        box2.style.paddingBottom = "10rem";
        para2.style.visibility = "visible";
        count2 = 1;
        console.log(count2);
    }
    else {
        box2.style.paddingBottom = "0rem";
        para2.style.visibility = "hidden";
        count2 = 0;
        console.log(count2);
    }
}
const swiBtn3 = () => {
    if (count3 == 0) {
        box3.style.paddingBottom = "10rem";
        para3.style.visibility = "visible";
        count3 = 1;
        console.log(count3);
    }
    else {
        para3.style.visibility = "hidden";
        box3.style.paddingBottom = "0rem";
        count3 = 0;
        console.log(count3);
    }
}