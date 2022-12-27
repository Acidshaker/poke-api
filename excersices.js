{
  const numberPagesPerBlock = 5;
  const cardsTotal = 122;
  const currentPage = 23;

  const blockPages = (numberPagesPerBlock, cardsTotal, currentPage) => {
    const arrayBlock = [];
    const arrayPages = [];
    let currentBlockPage = null;

    for (let i = 1; i <= cardsTotal; i++) {
      arrayBlock.push(i);
    }

    for (let i = 0; i < arrayBlock.length; i += numberPagesPerBlock) {
      arrayPages.push(arrayBlock.slice(i, i + numberPagesPerBlock));
    }

    for (let i = 0; i < arrayPages.length; i++) {
      if (arrayPages[i].includes(currentPage)) {
        currentBlockPage = arrayPages[i];
      }
    }

    return currentBlockPage;
  };

  console.log(blockPages(numberPagesPerBlock, cardsTotal, currentPage));
}
