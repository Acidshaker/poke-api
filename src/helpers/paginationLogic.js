// const numberPagesPerBlock = 2;
// const pokemonsFilter = [1, 2, 3, 4, 5];
// const currentPage = 23;

export const blockPages = (
  numberPagesPerBlock,
  pokemonsFilter,
  currentPage
) => {
  const currentPagesPerBlock = 5;
  const arrayBlock = [];
  const arrayPages = [];
  const pagesPerBlock = [];
  const arrayPagesNum = [];
  const arrayBlockNum = [];
  let currentBlockPages = null;

  for (let i = 1; i <= pokemonsFilter.length; i++) {
    arrayBlock.push(pokemonsFilter[i - 1]);
  }

  for (let i = 1; i <= pokemonsFilter.length; i++) {
    arrayBlockNum.push(i);
  }

  for (let i = 0; i < arrayBlock.length; i += numberPagesPerBlock) {
    arrayPages.push(arrayBlock.slice(i, i + numberPagesPerBlock));
  }

  for (let i = 0; i < arrayPages.length; i++) {
    arrayPagesNum.push(i + 1);
  }

  for (let i = 0; i < arrayPagesNum.length; i += currentPagesPerBlock) {
    pagesPerBlock.push(arrayPagesNum.slice(i, i + currentPagesPerBlock));
  }

  for (let i = 0; i <= pagesPerBlock.length - 1; i++) {
    if (pagesPerBlock[i].includes(currentPage)) {
      currentBlockPages = pagesPerBlock[i];
    }
  }

  const lastPage = pagesPerBlock[pagesPerBlock.length - 1];

  return { currentBlockPages, arrayPages, lastPage, pagesPerBlock };

  // return currentBlockPage
};

const pokemonsFilter = [
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "spearow", url: "https://pokeapi.co/api/v2/pokemon/21/" },
  { name: "fearow", url: "https://pokeapi.co/api/v2/pokemon/22/" },
  { name: "zubat", url: "https://pokeapi.co/api/v2/pokemon/41/" },
  { name: "golbat", url: "https://pokeapi.co/api/v2/pokemon/42/" },
];

console.log(blockPages(2, pokemonsFilter, 1));
