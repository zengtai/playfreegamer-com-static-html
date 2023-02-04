export default function Stars(rating = 0) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    i < Math.floor(rating)
      ? stars.push(
          <svg className="h-5 w-5 text-orange-500">
            <use xlinkHref="#__star"></use>
          </svg>
        )
      : stars.push(
          <svg className="h-5 w-5 text-orange-200">
            <use xlinkHref="#__star"></use>
          </svg>
        );
  }
  return stars;
}
