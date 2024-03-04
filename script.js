window.onload = (event) => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", foo);

  function foo() {
    alert("hello world");
  }
};
