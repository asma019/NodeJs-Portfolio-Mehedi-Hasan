"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { getBlurDataUrl, getImageClasses } from "./OptimizedImage.logic";

type OptimizedImageProps = ImageProps & {
  lowQualitySrc?: string;
  noBlur?: boolean;
};

export default function OptimizedImage({
  src,
  alt,
  lowQualitySrc,
  noBlur = false,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate blur data URL for small images
  const blurDataUrl = getBlurDataUrl(noBlur);

  const imageClasses = getImageClasses(isLoaded, noBlur, className);

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      placeholder={noBlur ? "empty" : "blur"}
      blurDataURL={blurDataUrl}
      onLoad={() => setIsLoaded(true)}
      className={imageClasses}
      style={{
        // Blur filter for smoother loading effect
        filter: isLoaded || noBlur ? "none" : "blur(20px)",
        transition: "filter 0.5s ease-in-out",
      }}
      {...props}
    />
  );
} 