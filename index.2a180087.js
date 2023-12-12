const e=new Headers({"Content-Type":"application/json","x-api-key":"DEMO-API-KEY"});fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100",{method:"GET",headers:e,redirect:"follow"}).then((e=>e.text())).then((e=>console.log(e))).catch((e=>console.log("error",e)));
//# sourceMappingURL=index.2a180087.js.map
