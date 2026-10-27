function save() {
    const name = document.getElementById("nombre").value;
    sessionStorage.setItem("name", name);
    window.location.href = "page2.html";
}
document.getElementById("save").addEventListener("click", save);