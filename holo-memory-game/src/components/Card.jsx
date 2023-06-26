import "../styles.css";

const cardImages = [
  { src: "/assets/pics/back.png" },
  { src: "/assets/pics/bae-1.png" },
  { src: "/assets/pics/fauna-1.png" },
  { src: "/assets/pics/mumei-1.png" },
  { src: "/assets/pics/irys-1.png" },
  { src: "/assets/pics/kronii-1.png" },
];

const Card = ({
  id,
  chosenCardList,
  setChosenCardList,
  index,
  maxMatch,
  disabledCardList,
  shuffled,
}) => {
  const selected = () => {
    return chosenCardList.some((card) => card.index === index);
  };

  const valid = () => {
    return !(
      selected() ||
      disabled() ||
      chosenCardList.length === maxMatch ||
      shuffled
    );
  };

  const disabled = () => {
    return disabledCardList.includes(index);
  };

  const handleClick = () => {
    if (!valid()) return;
    let newChosenCardList = [...chosenCardList, { id, index }];
    setChosenCardList(newChosenCardList);
  };
  return (
    <div
      className={`card ${selected() || shuffled ? "selected" : ""} ${
        disabled() ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <img src={cardImages[0].src} className={"back"}></img>
      <img src={cardImages[id].src} className={"front"}></img>
    </div>
  );
};

export default Card;
