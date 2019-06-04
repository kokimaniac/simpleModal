function Modal(){
    this.addToModal = (parent, className, typeElement) => {
        let modalElement = document.createElement(typeElement)
        modalElement.className = className
        parent.appendChild(modalElement)
        return modalElement
    }
}
function createModal (idSignature, imgSignature) {
    let x = new Modal()
    let superParent = document.getElementsByTagName("body")[0]
    let modalParent = x.addToModal(superParent, "modal-container", "div")
    let modalContainer = x.addToModal(modalParent, "modal", "div")
    let header = x.addToModal(modalContainer, "modal-header", "div")
    let content = x.addToModal(modalContainer, "modal-content", "div")
    let footer = x.addToModal(modalContainer, "modal-footer", "div")
    //
    modalContainer.id = idSignature
    header.innerHTML = "Asignación de Materias"
    content.innerHTML = `¿Es usted estudiante de ${imgSignature.alt}?`
    //header
    let close = x.addToModal(header, "close", "span")
    close.innerHTML = "&times;"
    //content
    let img = x.addToModal(content, "signature-img", "img")
    img.src = imgSignature.src
    //footer
    let buttons = []
    buttons.push(x.addToModal(footer, "btn-agree", "button"))
    buttons[0].innerHTML = "Sí"
    buttons.push(x.addToModal(footer, "btn-disagree", "button"))
    buttons[1].innerHTML = "No"
}
function modalEvents(){
    let modalContainer = document.getElementsByClassName("modal-container")[0]
    let rootDocument = document.getElementsByTagName("body")[0]
    let btnAgree = document.getElementsByClassName("btn-agree")[0].addEventListener("click", function(){
        //here the code if button agree
        rootDocument.removeChild(modalContainer)
        return true
    })
    let btnDisagree = document.getElementsByClassName("btn-disagree")[0].addEventListener("click", function(){
        //here the code if button disagree
        rootDocument.removeChild(modalContainer)
        return false
    })
    let close = document.getElementsByClassName("close")[0].addEventListener("click", function(){
        //here the code if button disagree
        rootDocument.removeChild(modalContainer)
        return false
    })
    window.addEventListener("click", function(event){
        if (event.target == modalContainer){
            //here the code if button disagree
            rootDocument.removeChild(modalContainer)
            return false
        }
    })
}
function showModal(){
    let signatures = document.getElementsByClassName("signature")
    for (let signature of signatures) {
        let checkBox = signature.getElementsByTagName("input")[0]
        if (checkBox.checked){
            createModal(checkBox.id, signature.getElementsByTagName("img")[0])
            checkBox.checked = false
            modalEvents()
        }
    }
}