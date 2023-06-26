import { useEffect, useState } from "react";
import ShuffleButton from "./components/ShuffleButton";
import CardContainer from "./components/CardContainer";
import { shuffleCard } from "./utils/Shuffle";

function App() {
  // states
  const [cardNumber, setCardNumber] = useState(16);
  const [cardList, setCardList] = useState([]);
  const [chosenCardList, setChosenCardList] = useState([]);
  const [maxMatch, setMaxMatch] = useState(2);
  const [disabledCardList, setDisabledCardList] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  // setting card list on initial load
  useEffect(() => {
    let newCardList = [];
    let id = 1;
    for (let i = 1; i <= cardNumber; i++) {
      newCardList.push(id);
      id = i % 4 === 0 ? id + 1 : id;
    }

    shuffleCard(
      newCardList,
      setCardList,
      setChosenCardList,
      setDisabledCardList,
      setShuffled
    );
  }, []);

  // handles card showing on shuffle
  useEffect(() => {
    if (shuffled) {
      setTimeout(() => setShuffled(false), 1000);
    }
  }, [shuffled]);

  // handles card choosing event
  useEffect(() => {
    if (chosenCardList.length < maxMatch) return;
    let matched = true,
      tempCard = chosenCardList[0];
    for (let card of chosenCardList) {
      if (card.id !== tempCard.id) {
        matched = false;
        break;
      }
      tempCard = card;
    }
    if (matched) {
      console.log("matched");

      setTimeout(() => {
        setDisabledCardList([
          ...disabledCardList,
          ...chosenCardList.map((card) => card.index),
        ]);
      }, 1000);
    }
    setTimeout(() => setChosenCardList([]), 1000);
  }, [chosenCardList]);

  // components
  return (
    <div className={"body"}>
      <ShuffleButton
        cardList={cardList}
        setCardList={setCardList}
        setDisabledCardList={setDisabledCardList}
        setChosenCardList={setChosenCardList}
        setShuffled={setShuffled}
      ></ShuffleButton>
      <CardContainer
        cardNumber={cardNumber}
        cardList={cardList}
        setCardList={setCardList}
        chosenCardList={chosenCardList}
        setChosenCardList={setChosenCardList}
        maxMatch={maxMatch}
        disabledCardList={disabledCardList}
        shuffled={shuffled}
      ></CardContainer>
    </div>
  );
}

export default App;
