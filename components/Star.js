import star from "@/public/images/star.svg";
import Image from "./Image";
export default function Star(rating = 0) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    i < Math.floor(rating)
      ? stars.push(<Image src={star} alt={`star`} width={40} height={39} className="w-4" />)
      : stars.push(
          <Image src={star} alt={`star`} width={40} height={39} className="w-4 opacity-20" />
        );
  }
  return stars;
}
