import { cn } from "@/utils/cn";
import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props<T extends React.ElementType> = {
  id: string;
  // style?: CSSProperties;
  variant?: "glow" | "secondary" | "primary";
  component?: T;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
} & React.ComponentPropsWithoutRef<T>;

const ButtonComponent = <T extends React.ElementType>({
  children,
  component,
  variant,
  className,
  id,
  ...otherProps
}: Props<T>) => {
  
  const OverridenComponent = component || "button";

  return (
    <OverridenComponent
      id={id}
      aria-label={id}
      className={cn(
        "hover:-translate-y-0.5  transition-[transform,_background] duration-300",
        variant === "secondary" &&
          "sm:py-2 text-sm sm:px-8 py-1 px-6 border rounded-xl border-indigo-800 text-indigo-400 bg-gray-950 bg-opacity-50 hover:bg-gray-900",
        variant === "glow" &&
          "sm:py-2 sm:px-8 px-6 py-1 text-sm bg-indigo-700 rounded-xl shadow-lg hover:bg-indigo-600 border border-indigo-500 shadow-indigo-950 text-indigo-200 hover:text-indigo-100",
        variant === "primary" &&
          "p-2 bg-gray-900 text-gray-100 rounded-lg text-sm font-bold",
        className
      )}
      {...otherProps}
    >
      {children}
    </OverridenComponent>
  );
};

export default ButtonComponent;
