(function() {
  var background = document.querySelector(".background");
  var button = document.querySelector(".form__btn");
  var close = document.querySelector(".modal-close");

  close.addEventListener("click", function(event) {
    background.classList.add("u--hidden");
  });

  window.addEventListener("click", function(event) {
    if (event.target == background) {
      background.classList.add("u--hidden");
    }
  });

  var form = document.getElementsByClassName("petition-form")[0];
  form.addEventListener("submit", function submitForm(e) {
    e.preventDefault();
    var formData = new FormData(form);
    var req = new XMLHttpRequest();

    req.addEventListener("load", function(event) {
      background.classList.remove("u--hidden");
    });

    req.open(form.getAttribute("method"), form.getAttribute("action"));
    req.send(formData);
  });
})();