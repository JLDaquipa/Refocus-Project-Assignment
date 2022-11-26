import { sort, search, newsList } from "./main.js";

//Example testing for search function

test("Sort Function testing (Ascending Order)", () => {
  const sortedList = [
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?"   
  ]
  expect(sort("ascending")).toEqual(sortedList);
});

test("Sort Function testing (Descending Order)", () => {
  const sortedList = [
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?"   
  ]
  expect(sort("descending")).toEqual(sortedList.reverse());
});

test("Search function testing", () => {
  expect(search(newsList)).toContain("Decoder: Mining asteroids for minerals can help spare Earth");
});



