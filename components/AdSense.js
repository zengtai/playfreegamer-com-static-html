import { ADSENSE_ID } from "@/lib/constants";

export default function AdSense({ style, className, slot, format, responsive, layout, layoutKey }) {
  return (
    <div className={`banner` + className ? " " + className : ""}>
      <ins
        className="adsbygoogle"
        style={style ? style : { display: "block" }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-responsive={responsive}
        data-ad-layout={layout}
        data-ad-layoutKey={layoutKey}
      ></ins>
    </div>
  );
}
