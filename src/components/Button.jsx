"use client";

export default function Pressable({ children, ...props }) {
  return (
    <button style={{ background: "none", border: "none" }} {...props}>
      {children}
    </button>
  );
}
