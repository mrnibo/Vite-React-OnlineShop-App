import React from "react";

interface DeTitleProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const DeTitle: React.FC<DeTitleProps> = ({
  children,
  className,
  size = "md",
}) => {
  // Define the size classes
  const sizeClasses = {
    sm: "text-2xl sm:text-3xl lg:text-4xl",
    md: "text-4xl sm:text-5xl lg:text-6xl",
    lg: "text-5xl sm:text-6xl lg:text-7xl",
  };

  return (
    <h1
      className={`${className} ${sizeClasses[size]} font-extrabold text-gray-900 text-center dark:text-gray-100`}
    >
      {children}
    </h1>
  );
};
