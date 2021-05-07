function searchBooks() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("booktable");
  tr = table.getElementsByTagName("tr");

  for (row of tr) {
    td = row.getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }
}

// TODO: this doesn't play nice with search
function toggleFiction() {
  var newState = document.getElementById("fictioncheck").checked;
  let visibility = newState ? "none" : "";
  table = document.getElementById("booktable");
  tr = table.getElementsByTagName("tr");
  for (row of tr) {
    td = row.getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue == "no") {
        row.style.display = visibility;
      }
    }
  }
}
