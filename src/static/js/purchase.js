const url = window.location.href
var path = url.split("/");
const id = path[path.length - 1]

function parseFetchResponse(data){
    let caseNameDiv = document.querySelector(".case-name")
    caseNameDiv.innerHTML = data.name
    console.log(caseNameDiv);

    let caseImageDiv = document.querySelector(".case-image-box")
    caseImageDiv.innerHTML = `<img src='${data.image}' class='case-image'>`;

    let caseItemDiv = document.querySelector(".case-items")
    let itemsHTML = ''
    for(let item of data.items){
        itemsHTML += `<div class="item">
                        <div class="item-name">
                            ${item.name}
                        </div>
                        <img src='${item.image}'>
                        <div class="item-price">
                            ${item.price}
                        </div>
                      </div>`
    }
    caseItemDiv.innerHTML = itemsHTML
}

fetch('/api/case/get/?id='+id)
  .then(response => response.json())
  .then(data => {
      parseFetchResponse(data)

  });

