import { cn } from "@/utils/cn";
import React, { CSSProperties, ReactNode } from "react";
type Props<T extends React.ElementType> = {
  children: ReactNode;
  component?: T;
  style?: CSSProperties;
  className?: string;
} & React.ComponentPropsWithRef<T>;

const CardComponent = <T extends React.ElementType>({
  children,
  className,
  component,
  ...otherProps
}: Props<T>) => {
  const OverridenComponent = component || "div";

  return (
    <OverridenComponent
      className={cn(
        " bg-gray-800 hover:-translate-y-0.5 duration-150 transition-transform bg-opacity-30 backdrop-blur-xl rounded-3xl p-4 border border-gray-700",
        className
      )}
      {...otherProps}
    >
      {children}
    </OverridenComponent>
  );
};

export default CardComponent;
