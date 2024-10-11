const url = "https://api.thecatapi.com/v1/images/search?limit=10"


async function download() {

   const response = await fetch(url)
   const data = await response.json()
   const element = document.querySelector(".images");
   for (let i = 0; i < 10; i++) {
      element.innerHTML += "<img src='"+data[i].url+"' width= 500; height= 600>"
   }
}

download();

document.addEventListener('keydown', async function (event) {
   if (event.key === 'Enter') {
      location.reload();
   }
})