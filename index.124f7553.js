const e=document.querySelector(".js-breed-select");document.querySelector(".cat-info");e.addEventListener("click",(function(t){t.preventDefault(),n().then((t=>{e.insertAdjacentHTML("beforeend",t.id.name.map((({name:e})=>`<option \n  value="breed-name">${e} \n  </option>`)).join("")),console.log(e)})).catch((e=>console.log(e)))}));let t=[];function n(e){return fetch(`https://api.thecatapi.com/v1/breeds?live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B&id=${e}`).then((e=>{if(console.log(e.json()),!e.ok)throw new Error(e.statusText);return e.json()}))}n().then((e=>{t=e.currentTarget.id;for(let e=0;e<t.length;e++){const n=t[e];let o=document.createElement("option");n.image&&(o.value=e,o.innerHTML=`${n.name}`,document.getElementById("breed_selector").appendChild(o))}console.log(t)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.124f7553.js.map
