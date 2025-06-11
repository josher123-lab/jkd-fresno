document.getElementById("checkinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const type = document.getElementById("classType").value || "General";
  const date = new Date().toLocaleString();
  const entry = `${date} - ${name} (${type})`;
  let list = JSON.parse(localStorage.getItem("checkins") || "[]");
  list.push(entry);
  localStorage.setItem("checkins", JSON.stringify(list));
  renderList();
});
function renderList() {
  const list = JSON.parse(localStorage.getItem("checkins") || "[]");
  const checkinList = document.getElementById("checkinList");
  checkinList.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    checkinList.appendChild(li);
  });
}
renderList();