function show() {
    const name = sessionStorage.getItem("name");
    const city = sessionStorage.getItem("city");

    if (name === null || city === null) {
        document.getElementById("greats").textContent = "There is not any name or city saved in our database.";
    }
    else {
        document.getElementById("greats").textContent = "Good morning dear, " + name + ", from " + city + ", welcome to our page.";
    }
}

function remove() {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("city");
    show();
}
document.addEventListener("DOMContentLoaded", show);
document.getElementById("remove").addEventListener("click", remove);
