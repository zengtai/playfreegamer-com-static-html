import NextImage from "next/image";
import { useEffect, useState } from "react";
import NoImage from "@/public/images/no-image-m.png";
import Spinner from "@/public/images/spinner.svg";
// import Spinner from "@/public/spinner.svg";

export default function Image({
  fallbackImage = NoImage,
  loadingImage = Spinner,
  src,
  alt,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <>
      {
        <NextImage
          onLoadingComplete={() => {
            console.log("Image loaded");
            setIsLoading(false);
          }}
          onError={setError}
          // data-src={src}
          src={isLoading ? loadingImage : error ? fallbackImage : src}
          alt={alt}
          {...props}
        />
      }
    </>
  );
}
