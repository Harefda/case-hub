const url = new URL(window.location.href)

const form = document.querySelector("#login-form")
const next = url.searchParams.get("next")

form.addEventListener("submit", function(event){
    event.preventDefault()
    var oData = new FormData(form)
    var oReq = new XMLHttpRequest()
    oReq.open("POST", "/api/user/login/", true)
    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            window.location.href = next !== null ? next : '/home/' 
        } else if(oReq.status == 400) {
            console.log(oReq.error)
        }
    };
    oReq.send(oData)
})