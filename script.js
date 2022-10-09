let weather ={
    apiKey:"e44ced4389de350261e60a15a20666a8",
    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
        .then((response)=> response.json())
        .then((data)=> this.display(data));

        
    },
    display:function(data){
        const { name }= data;
        const { icon,description }= data.weather[0];
        const { humidity,temp }= data.main; 
        const { speed }=data.wind;
        console.log(name,icon,description,humidity,temp,speed);
        document.querySelector(".city").innerText= "Weather in "+ name;
        document.querySelector(".temp").innerText= temp +"°C";
        document.querySelector(".desc").innerText= description;
        document.querySelector(".humidity").innerText= "Humidity: "+humidity;
        document.querySelector(".wind").innerText= "Wind Speed: "+speed+"km/h";
        // document.querySelector(".icon").src="";
    },
        search:function(){
            // console.log(this);
    weather.fetchweather(document.querySelector(".searchbar").value);
            
        }
   
}



let search=document.querySelector(".search button");
search.addEventListener('click',weather.search);


// function postdata(){
//     url="https://api.instantwebtools.net/v1/airlines";
//     // data='{"name":"heya","salary":"123","age":"23"}';
//     data='{"name":"Johny Fin","trips": "346", "airline": "6"}';
//     params={
//         method:'post',
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:data
//     }
//     fetch(url,params).then(response=> response.json()).then(data=> console.log(data));
// }
// postdata();
 
//Trying an exercise (not of use for the weather app)
// let s="all";
// let links=document.links;
// Array.from(links).forEach((e)=>{
//     if(e.href.includes(s)){
//         console.log(e);
//     }
// })