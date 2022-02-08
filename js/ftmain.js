function myfunction(obj) {
  if (obj.checked) {
    // console.log("if obj.checked")
    // console.log(obj.id)
    // console.log(obj.checked)
    localStorage.setItem(obj.id, obj.checked)
    // location.reload()
  } else {
    // console.log("if not obj.checked")
    // console.log(obj.id)
    // console.log(obj.checked)
    localStorage.removeItem(obj.id);
    // location.reload()
  }
}

function loadCheck() {
  var list = document.querySelectorAll(`[type*="checkbox"]`);
  list.forEach(el => {
    if (localStorage.getItem(el.id) === "true") {
      document.getElementById(el.id).checked = true
      // console.log("this should work")
    }
  })
}

function uncheckAll() {
  document.querySelectorAll('input[type="checkbox"]')
.forEach(el => el.checked = false);
}

function resetAll() {
  document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => localStorage.removeItem(el.id));
}


