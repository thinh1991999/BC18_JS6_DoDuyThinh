//Start BT1
function getNumber() {
  let start = 0;
  let count = 0;
  while (count < 10000) {
    start++;
    count += start;
  }

  return start;
}

function getResultBT1() {
  const resultBtn = document.querySelector(".result-btn-1");
  if (resultBtn) {
    resultBtn.onclick = (e) => {
      const messEl = document.querySelector(".mess-1");
      const result = getNumber();
      let count = 0;
      for (let i = 0; i <= 141; i++) {
        count += i;
      }
      console.log(count);
      messEl.innerHTML =
        "Số nguyên dương nhỏ nhất và thỏa điều kiện là :" + result;
    };
  }
}

getResultBT1();
//End BT1

// Start BT2

function executeBT2(nb1, nb2) {
  let result = nb1;
  if (nb2 === 0) {
    return Math.pow(nb1, nb2);
  }
  for (let i = 2; i <= nb2; i++) {
    result += Math.pow(nb1, i);
  }
  return result;
}

function getResultBT2() {
  const resultBtn = document.querySelector(".result-btn-2");
  if (resultBtn) {
    resultBtn.onclick = (e) => {
      const messEl = document.querySelector(".mess-2");
      const nb1 = document.querySelector("input[name='number1']").value * 1;
      const nb2 = document.querySelector("input[name='number2']").value * 1;
      const result = executeBT2(nb1, nb2);
      console.log(Math.pow(-1, 0));
      messEl.innerHTML = result;
    };
  }
}

getResultBT2();

// End BT2

// Start BT3

function executeBT3(nb) {
  let result = 0;
  if (nb === 0) {
    result = 0;
  } else if (nb > 0) {
    result = 1;
    for (let i = 2; i <= nb; i++) {
      result = result * i;
    }
  } else if (nb < 0) {
    result = 1;
    for (let i = 2; i <= Math.abs(nb); i++) {
      result = result * i;
    }
    result = result * -1;
  }

  return result;
}

function getResultBT3() {
  const resultBtn = document.querySelector(".result-btn-3");
  if (resultBtn) {
    resultBtn.onclick = (e) => {
      const messEl = document.querySelector(".mess-3");
      const nb = document.querySelector("input[name='numberBT3']").value * 1;
      const result = executeBT3(nb);
      messEl.innerHTML = result;
    };
  }
}

getResultBT3();

// End BT3

// Start BT4

function getResultBT4() {
  const resultBtn = document.querySelector(".result-btn-4");
  if (resultBtn) {
    resultBtn.onclick = (e) => {
      const divWrap = document.querySelector(".div_wrap");
      console.log(divWrap);
      let result = "";
      for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
          result += `<div class="div--red">div-${i}</div>`;
        } else {
          result += `<div class="div--blue">div-${i}</div>`;
        }
      }
      divWrap.innerHTML = result;
    };
  }
}

getResultBT4();

// End BT4

// Start BT5

function executeBT5(number) {
  let result = false;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    result = true;
  }

  return result;
}

function getResultBT5() {
  const resultBtn = document.querySelector(".result-btn-5");
  if (resultBtn) {
    resultBtn.onclick = (e) => {
      const messEl = document.querySelector(".mess-5");
      const nb = document.querySelector("input[name='numberBT5']").value * 1;
      let result = "Số nguyên tố:";
      if (nb < 2) {
        result = "Không có số nguyên tố nào vì số đầu vào không lớn hơn 1";
      } else {
        for (let i = 2; i <= nb; i++) {
          if (executeBT5(i)) {
            result += `${i},`;
          }
        }
      }
      messEl.innerHTML = result;
    };
  }
}

getResultBT5();

// End BT5
