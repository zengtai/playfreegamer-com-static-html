import GameListItem from "./GameListItem";

export default function GameList({ items }) {
  return (
    <ul className="game-list">
      {items?.map((i) => (
        <GameListItem key={i?.id} item={i} />
      ))}
    </ul>
  );
}
