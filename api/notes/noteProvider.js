const eventHub = document.querySelector(".container")

const clickedMe = eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent)
})

eventHub.dispatchEvent(clickedMe)