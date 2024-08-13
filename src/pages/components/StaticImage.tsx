import React from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function StaticImage(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const newProps = { ...props, src: `${basePath}/${props.src}` };
  return <img {...newProps} />;
}
