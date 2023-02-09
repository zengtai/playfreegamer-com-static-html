import GameListItem from "./GameListItem";

export default function GameList({ items }) {
  return (
    <ul className="game-list">
      {items?.map((i, index) => (
        <GameListItem key={i?.appid} item={i} index={index} />
      ))}
    </ul>
  );
}
