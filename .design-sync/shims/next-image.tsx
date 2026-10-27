// Stand-in for next/image in the design-sync bundle. claude.ai/design has no
// Next.js image server, so this renders a plain <img> with the same layout
// behavior the site relies on (fill, width/height) and swaps public/ paths for
// embedded copies built by .design-sync/build-inputs.mjs.
import type { CSSProperties, ImgHTMLAttributes } from "react";
import { images } from "../.cache/images";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function Image({ src, fill, priority: _priority, style, ...rest }: Props) {
  const fillStyle: CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : {};
  return <img src={images[src] ?? src} style={{ ...fillStyle, ...style }} {...rest} />;
}
