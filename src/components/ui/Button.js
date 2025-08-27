import React from "react";

export default function Button({ as: El = "button", className = "", children, ...props }) {
  return (
    <El
      className={`px-4 py-2 rounded-xl font-medium shadow hover:shadow-md active:scale-[.98] transition ${className}`}
      {...props}
    >
      {children}
    </El>
  );
}
