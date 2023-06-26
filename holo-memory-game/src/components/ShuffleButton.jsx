import { shuffleCard } from "../utils/Shuffle";

const ShuffleButton = ({
  cardList,
  setCardList,
  setChosenCardList,
  setDisabledCardList,
  setShuffled,
}) => {
  return (
    <button
      className={"btn"}
      onClick={() =>
        shuffleCard(
          cardList,
          setCardList,
          setChosenCardList,
          setDisabledCardList,
          setShuffled
        )
      }
    >
      Shuffle
    </button>
  );
};

export default ShuffleButton;
