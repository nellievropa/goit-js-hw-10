const e=document.querySelector(".breed-select");document.querySelector(".cat-info"),document.querySelector(".loader"),document.querySelector(".error");e.addEventListener("click",(function(o){o.preventDefault(),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B").then((e=>{if(console.log(e.json()),!e.ok)throw new Error(e.status);return e.json()})).then((o=>{e.insertAdjacentHTML("beforeend",o.id.name.map((({name:e})=>`<option \n  value="breed-name">${e} \n  </option>`)).join("")),console.log(e)})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.b29c51ee.js.map