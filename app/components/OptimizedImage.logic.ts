export function getBlurDataUrl(noBlur: boolean): string | undefined {
  return noBlur
    ? undefined
    : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg==";
}

export function getImageClasses(isLoaded: boolean, noBlur: boolean, className?: string): string {
  return `transition-opacity duration-500 ${!isLoaded && !noBlur ? "opacity-0" : "opacity-100"} ${className || ""}`;
}
