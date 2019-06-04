let getReport = (id) => {
    let getImage = document.getElementsByClassName(id)[0]
    let container = document.getElementsByClassName("container")[0]
    let reportSignature = document.createElement("div")
    let headerReport = document.createElement("header")
    let signImage = document.createElement("div")
    let imgSign = document.createElement("img")
    reportSignature.className = "report-signature"
    headerReport.innerHTML = "Reportes"
    signImage.className = "signature-img"
    imgSign.className = id
    imgSign.src = getImage.src
    signImage.appendChild(imgSign)
    reportSignature.appendChild(headerReport)
    reportSignature.appendChild(signImage)
    getImage.remove()
    container.appendChild(reportSignature)
}

let validateForm = function(event){
    let form = document.forms['validateSignature']['signature']
    for (let item of form){
        if (item.checked){
            //console.log(`¿Eres estudiante de ${item.value}?`)
            if (confirm(`¿Eres estudiante de ${item.value}?`)){
                getReport(item.id)
                item.checked = false
                break
            }
            alert("Selecciona otra asignatura")
            item.checked = false
            break
        }
    }
    event.preventDefault()
}