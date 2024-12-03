

const City = document.querySelector(".City")

const Humidity = document.querySelector(".Humidity")

const Wind = document.querySelector(".Wind")

const Temp = document.querySelector(".Temp")

const Div_Of_SearchBar = document.querySelector(".Div_Of_SearchBar")

 let SearchBar_Value = Div_Of_SearchBar.value;

const button_Of_SearchIcon = document.querySelector(".button_Of_SearchIcon")

const apiKey = "&appid=cb6dcde02e125c7b926cdb63ce94ef51"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="



button_Of_SearchIcon.addEventListener("click" , ()=> {console.log(Div_Of_SearchBar.value) 
    fetchData()
} )


function fetchData(){
    fetch(apiUrl +Div_Of_SearchBar.value+ apiKey)
    .then(Resulte_1 => Resulte_1.json())
    .then(Resulte_2 => {
        console.log(Resulte_2);
        City.textContent = Resulte_2.name;
        Humidity.textContent = Resulte_2.main.humidity + "%"
        Wind.textContent = Resulte_2.wind.speed + " km/h"
        Temp.textContent=Resulte_2.main.temp + "°C"
    }).catch((error)=>{
        
        City.textContent = "error";
        Humidity.textContent = "error" 
        Wind.textContent = "error"   
Temp.textContent="error"
    });
}


