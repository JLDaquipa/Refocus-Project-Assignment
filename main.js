//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;

  //Write your code here for the search function
  newsList = newsList.filter(news => { return news == inputValue})

  return newsList;
}

export function sort(type) {
  console.log(type)
  if (type == "ascending") {
    //Write your code here for sorting (ascending)
    newsList = newsList.sort((a,b) => {
      a = a.toUpperCase().replace(/[^\w\s]/gi, '') // remove special characters so that it will sort using only the alphabets
      b = b.toUpperCase().replace(/[^\w\s]/gi, '')

      if(a > b){
        return 1;
      }else if(a < b){
        return -1;
      }else{
        return 0;
      }

    })
  } else {
    //Write your code here for sorting (descending)
    newsList = newsList.sort((a,b) => {
      a = a.toUpperCase().replace(/[^\w\s]/gi, '') // remove special characters so that it will sort using only the alphabets
      b = b.toUpperCase().replace(/[^\w\s]/gi, '')

      if(a < b){
        return 1;
      }else if(a > b){
        return -1;
      }else{
        return 0;
      }

    })
  }
  return newsList;
}
