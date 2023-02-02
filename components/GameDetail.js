export default function GameDetail({ item }) {
  return (
    <div>
      <h1>{item?.title}</h1>
      <div>{item?.category}</div>
      <div>{item?.rating}</div>
      <div>{item?.played}</div>
      <div>{item?.description}</div>
      <button>Play Now</button>
    </div>
  );
}
