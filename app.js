let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

const imgWidth = imgs[0].getBoundingClientRect().width;
// 获取图片宽度

function setImgPosition(img, index) {
  img.style.left = imgWidth * index + "px";
}
imgs.forEach(setImgPosition);
// 计算每一张图片，第几章图片+移动的距离

const moveToImg = function (list, currentImg, targetImg) {
  list.style.transform = "translateX(-" + targetImg.style.left + ")";
  currentImg.classList.remove("current-img");
  targetImg.classList.add("current-img");
};

const hideShowArrows = function (imgs, prevBtn, nextBtn, targetIndex) {
  if (targetIndex === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else if (targetIndex === imgs.length - 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
};

nextBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const nextImg = currentImg.nextElementSibling;
  const nextIndex = imgs.findIndex((img) => img === nextImg);

  moveToImg(list, currentImg, nextImg);
  hideShowArrows(imgs, prevBtn, nextBtn, nextIndex);
});// 点击右边按钮，图片向左移动

prevBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const prevImg = currentImg.previousElementSibling;
  const prevIndex = imgs.findIndex((img) => img === prevImg);

  moveToImg(list, currentImg, prevImg);
  hideShowArrows(imgs, prevBtn, nextBtn, prevIndex);
}); // 点击左边按钮，图片向右移动
