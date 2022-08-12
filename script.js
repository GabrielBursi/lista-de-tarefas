var inputTarefa = document.querySelector(".input-tarefa")
var btnAnotar = document.querySelector(".btn-anotar-tarefa")
var main = document.querySelector("#main")

function anotar() {
    var novaTag = document.createElement("div")
    novaTag.classList.add("container-tarefa")
    novaTag.innerHTML = `<div class="container-tarefa">
            <div class="header-tarefa">
                Tarefa 1
            </div>
            <div class="body-tarefa">
                <p>${inputTarefa.value}</p>
            </div>
            <div class="footer-tarefa">
                <button class="btn-edicao-tarefa" hidden>Editar</button>
                <button class="btn-edicao-tarefa" hidden>Excluir</button>
            </div>
        </div>`
    main.appendChild(novaTag)
    console.log(main.innerHTML)
}