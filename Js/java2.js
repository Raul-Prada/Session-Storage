function showname() {
    const name = sessionStorage.getItem("name");

    if (name === null) {
        document.getElementById("greats").textContent = "There is not any name saved in our database.";
    }
    else {
        document.getElementById("greats").textContent = "Good morning dear, " + name + ", welcome to our page.";
    }
}

function remove() {
    sessionStorage.removeItem("name");
    showname();
}
document.addEventListener("DOMContentLoaded", showname);
document.getElementById("remove").addEventListener("click", remove);
