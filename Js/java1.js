function save(event) {
    event.preventDefault();

    const name = document.getElementById("nombre").value;
    const city = document.getElementById("ciudad").value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("city", city);

    window.location.href = "page2.html";
}
document.getElementById("user-form").addEventListener("submit", save);