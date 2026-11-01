function show() {
    const name = localStorage.getItem("name");
    const city = localStorage.getItem("city");

    if (name === null || city === null) {
        document.getElementById("greats").textContent = "There is not any name or city saved in our database.";
    }
    else {
        document.getElementById("greats").textContent = "Good morning dear, " + name + ", from " + city + ", welcome to our page.";
    }
}

function remove() {
    localStorage.removeItem("name");
    localStorage.removeItem("city");
    show();
}
document.addEventListener("DOMContentLoaded", show);
document.getElementById("remove").addEventListener("click", remove);
