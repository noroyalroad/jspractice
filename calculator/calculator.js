// calculator.js

document.addEventListener("DOMContentLoaded", function () {
  const numberButtons = document.querySelectorAll(".row-1-n, .row-2-n, .row-3-n, .zero");

  const result = document.querySelector(".result");
  const oper = document.querySelectorAll(".operation");
  const enter = document.querySelector(".enter");
  const row0 = document.querySelectorAll(".row-0");

  let s = "";

  enter.addEventListener("click", () => {
    result.textContent = val(s);
    s = val(s);
    console.log(s);
  });

  oper.forEach((el) => {
    el.addEventListener("click", function () {
      s += el.textContent;
      result.textContent = s;
    });
  });

  // 각 숫자 버튼에 대해 이벤트 리스너 추가
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 클릭된 버튼의 텍스트 내용을 결과 창에 추가
      console.log(button.textContent);
      s += button.textContent;
      result.textContent = s;
    });
  });
});

function val(s) {
  return eval(s);
}
