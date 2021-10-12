
   
function closechat()
{
        document.getElementById("container").style.display="none";
}
var messages = [];

function openchat()
{
        document.getElementById("container").style.display="inline";
      
        fetch("https://60df0afcabbdd9001722d1d9.mockapi.io/movies/messages")
        .then((response) => response.json())
        .then((data) => {
          messages = data;
          parseData(data);
        });
        
 

}   

function parseData(data) {
        let container = document.getElementById("messages");
        container.innerHTML = "";
        data.forEach((element) => {
          let messageTag = document.getElementById("messages");
          let wrapperDiv = document.createElement("div");
          wrapperDiv.className = "wrapper";
          let h2Tag = document.createElement("h2");
          let messageParaTag = document.createElement("p");
          let imgTag = document.createElement("img");
          imgTag.src = element.avatar;
          messageParaTag.innerHTML = element.message;
          h2Tag.innerHTML = element.name;
          wrapperDiv.appendChild(h2Tag);
          wrapperDiv.appendChild(messageParaTag);
          wrapperDiv.appendChild(imgTag);
          messageTag.appendChild(wrapperDiv);
        });
      }
      function filter() {
        let filterTag = document.getElementById("filter-tag").value;
        const result = messages.filter((word) => word.name.includes(filterTag));
        parseData(result);
        console.table(result);
      }
    