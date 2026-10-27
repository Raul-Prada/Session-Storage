function save() {
    const name = document.getElementById("nombre").value;
    const city = document.getElementById("ciudad").value;
    
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("city", city);

    window.location.href = "page2.html";
}
document.getElementById("save").addEventListener("click", save);