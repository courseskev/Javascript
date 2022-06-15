const obtenerData = () => {
    fetch("../files/data.json")
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log("Mirar:", err)
        })
}

const btnJson = document.querySelector('#usandoFetch')
btnJson.addEventListener('click', obtenerData)