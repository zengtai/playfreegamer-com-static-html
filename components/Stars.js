export default function Stars({ rating = 0 }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    i < Math.floor(rating)
      ? stars.push(
          <svg key={i} className="star">
            <use xlinkHref="#__star"></use>
          </svg>
        )
      : stars.push(
          <svg key={i} className="un-star">
            <use xlinkHref="#__star"></use>
          </svg>
        );
  }
  return <>{stars}</>;
}
