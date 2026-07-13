"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const hover = (event: Event) => setActive(Boolean((event.target as HTMLElement).closest("a, button, input, textarea")));
    window.addEventListener("mousemove", move); document.addEventListener("mouseover", hover);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", hover); };
  }, []);
  return <><span className="cursor-dot" style={{ transform: `translate(${position.x - 5}px, ${position.y - 5}px)` }} /><span className={`cursor-ring ${active ? "is-active" : ""}`} style={{ transform: `translate(${position.x - 19}px, ${position.y - 19}px)` }} /></>;
}
