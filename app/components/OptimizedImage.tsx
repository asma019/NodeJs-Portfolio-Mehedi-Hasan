"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

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
  const blurDataUrl = noBlur 
    ? undefined 
    : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg==";

  const imageClasses = `transition-opacity duration-500 ${!isLoaded && !noBlur ? "opacity-0" : "opacity-100"} ${className || ""}`;

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