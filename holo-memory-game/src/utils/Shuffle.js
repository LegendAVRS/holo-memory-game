var shuffleAudio = new Audio("assets/sfx/shuffle.mp3");

export const shuffleCard = (
  cardList,
  setCardList,
  setChosenCardList,
  setDisabledCardList,
  setShuffled
) => {
  // shuffles
  let shuffledCardList = [...cardList];
  for (let i = shuffledCardList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCardList[i], shuffledCardList[j]] = [
      shuffledCardList[j],
      shuffledCardList[i],
    ];
  }
  setCardList(shuffledCardList);
  setChosenCardList([]);
  setDisabledCardList([]);
  setShuffled(true);

  shuffleAudio.play();
};
