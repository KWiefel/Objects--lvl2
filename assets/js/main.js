// ==================== lev2_1 ========================

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.

let edelMetallName = [];
edelMetallPreise.forEach((type) => {
  edelMetallName.push(type.name);
});
console.log(edelMetallName);

// Verwende map() und greife auf alle name zu.

const edelMetallName2 = edelMetallPreise.map((type) => (type = type.name));
console.log(edelMetallName2);

// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.

let edelMetallPrice = [];
edelMetallPreise.forEach((type) => {
  edelMetallPrice.push(type.preiseGramEuro);
});
console.log(edelMetallPrice);

// Verwende map() und greife auf alle preiseGramEuro zu.

const edelMetallPrice2 = edelMetallPreise.map(
  (type) => (type = type.preiseGramEuro)
);
console.log(edelMetallPrice2);

// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.

let edelMetallChange = [];
edelMetallPreise.forEach((type) => {
  edelMetallChange.push(type.veraenderung);
});
console.log(edelMetallChange);

// Verwende map() und greife auf alle veraenderung zu.

const edelMetallChange2 = edelMetallPreise.map(
  (type) => (type = type.veraenderung)
);
console.log(edelMetallChange2);

// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu

const edelMetallPriceHigh = edelMetallPreise.filter((type) =>
  type.preiseGramEuro >= 50 ? type : ""
);
console.log(edelMetallPriceHigh);

// ==================== lev2_2 ========================

const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

// Du hast Sammlungen deiner Lieblingsbands. Du möchtest sie alphabetisch sortieren.
// Sortiere die Bands alphabetisch nach Namen.
// Verwende den Code aus dem Kommentarbereich.
// Sortiere die Bands alphabetisch.
// Gib das Ergebnis in der Konsole aus.

// singers.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });

// console.log(singers);

// ==================== lev2_3 ========================

// Du hast eine Sammlung deiner Lieblingsbands. Nun möchtest du sie auf deiner Seite als Tabelle anzeigen.

// Verwende den Code  aus dem Kommentarbereich.
// Erstelle die Tabelle mit JS.
// Zeige die Tabelle in HTML an.

// Hinweise:
// forEach
// Template literals
// return

// {
//   name: "Pink Floyd",
//   country: "United Kingdom",
//   period_active: { start: 1965, end: 1996, extra: 2014 },
//   genre: "Progressive rock / Psychedelic rock",
// }

const outputTable = document.body.querySelector("#table");

const showSingers = (array) =>
  array.forEach((band) => {
    outputTable.innerHTML += `<tr>
  <td>${band.name}</td>
  <td>${band.country}</td>
  <td>${band.period_active.start} - ${band.period_active.end}</td>
  <td>${band.genre}</td>
</tr>`;
  });

showSingers(singers);

// ==================== lev2_4 ========================

// Du hast eine Sammlung deiner Lieblingsbands. Nun möchtest du die Möglichkeit haben nach dem Namen, dem Land oder die Art der Musik in einer Tabelle zu sortieren.

// Verwende den Code (HTML)  aus dem Kommentarbereich.
// Erstelle eine Tabelle, Buttons und sortiere mit JS.
// Zeige die Tabelle in HTML an.

const reset = () =>
  (outputTable.innerHTML = `<tr>
<th onclick="sortName()">Name</th>
<th>Country</th>
<th>Period Active</th>
<th>Genre</th>
</tr>`);

const sortName = () => {
  reset();
  singersSorted = [...singers];

  singersSorted.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  showSingers(singersSorted);
};

const sortCountry = () => {
  reset();
  singersSorted = [...singers];

  singersSorted.sort((a, b) => {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  });

  showSingers(singersSorted);
};

const sortPeriod = () => {
  reset();
  singersSorted = [...singers];

  singersSorted.sort((a, b) => {
    if (a.period_active.start < b.period_active.start) {
      return -1;
    }
    if (a.period_active.start > b.period_active.start) {
      return 1;
    }
    return 0;
  });

  showSingers(singersSorted);
};

const sortGenre = () => {
  reset();
  singersSorted = [...singers];

  singersSorted.sort((a, b) => {
    if (a.genre < b.genre) {
      return -1;
    }
    if (a.genre > b.genre) {
      return 1;
    }
    return 0;
  });

  showSingers(singersSorted);
};

const handleSearchClicked = () => {
  const searchInput = document.body.querySelector("#searchInput");

  reset();

  let singersFiltered = singers.filter((band) =>
    band.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showSingers(singersFiltered);
};
