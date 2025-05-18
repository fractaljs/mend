"use client";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): any {
  return (
    <button type="button" {...other}>
      {children}s
    </button> 
  );
}

Button.displayName = "Button";
