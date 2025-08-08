import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { ReactNode } from "react";

const variants = {
  blue: `bg-primary-blue self-center px-8 py-3 rounded-full`,
  white: `bg-['#ffffff'] py-[4px] px-[8px] rounded-[12px]`,
  grey: `bg-['#FFFFFF1F'] py-[4px] px-[8px] rounded-[12px]`,
  transparent: `py-[4px] px-[8px] rounded-[12px]`,
};

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  variant: keyof typeof variants;
} & TouchableOpacityProps;

export default function Button({
  children,
  variant,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      className={`${variants[variant]} ${className} flex-row items-center gap-2`}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
