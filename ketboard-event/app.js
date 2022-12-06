const keyText = document.getElementById("key")
const locationText = document.getElementById("location")
const whichText = document.getElementById("which")
const codeText = document.getElementById("code")
const eventcontainer = document.getElementById("event-container")

window.addEventListener("keydown", (e)=>{
    e.preventDefault()
    console.log(e)
    console.log(e.key)
    console.log(e.code)
    console.log(e.location)
    console.log(e.which)

    let html = `
        <h1 class="key-code">
             ${e.which  }
        </h1>
        <div class="events"  >
            <div class="event"  >
                <span class="event-title" >event.key</span>
                <span class="event-text" id="key">${e.key}</span>
            </div>
            <div class="event">
                <span class="event-title" >event.location</span>
                <span class="event-text" id="location" >${e.location}</span>
            </div>
            <div class="event">
                <span class="event-title" >event.which</span>
                <span class="event-text" id="which" >${e.which}</span>
            </div>
            <div class="event">
                <span class="event-title" >event.code</span>
                <span class="event-text" id="code" >${e.code}</span>
            </div>
        </div>    
    `

    eventcontainer.innerHTML = html
    
})