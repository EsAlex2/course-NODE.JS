

console.log( process.env );

const { TEMP, TERM_PROGRAM } = process.env;

// console.table( { TEMP, TERM_PROGRAM } ); 

const heros = ['Batman', 'Superman', 'Spiderman', 'Ironman'];

const [h1, h2, h3, h4] = heros;

// console.table( { h1, h2, h3, h4 } );