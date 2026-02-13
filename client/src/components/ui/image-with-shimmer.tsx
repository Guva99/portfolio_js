import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithShimmerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  shimmerColor?: string;
  wrapperClassName?: string;
}

export function ImageWithShimmer({ 
  className, 
  wrapperClassName,
  shimmerColor, 
  alt, 
  onLoad,
  ...props 
}: ImageWithShimmerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 animate-pulse z-10", 
            shimmerColor || "bg-slate-800"
          )} 
        />
      )}
      <img
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        alt={alt}
        onLoad={(e) => {
          setIsLoading(false);
          if (onLoad) onLoad(e);
        }}
        {...props}
      />
    </div>
  );
}
