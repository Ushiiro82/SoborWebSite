const mapElements = Array.from(document.getElementsByClassName("map-element-container"))

mapElements.forEach(element => {
    element.onclick = _ => location.href = "/html/" + element.classList[1] + ".html"
});

mapElements.forEach(el => console.log(el))
