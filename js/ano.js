document.addEventListener("DOMContentLoaded", () =>{
    const spanAno = document.getElementById("ano");
    if (spanAno) {
        spanAno.textContent = new Date().getFullYear();
    }
});