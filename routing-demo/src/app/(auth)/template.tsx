"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { link } from "fs";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "forgot-password", href: "/forgot-password" },
];

export default function AuthLayoutsecond({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input , setInput] = useState('')
  return (
    <>
    <div>
      <input className="bg-cyan-100 border-2 border-blue-500" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            className={isActive ? "font-extrabold mr-3" : " text-cyan-400"}
            href={link.href}
            key={link.name}
          >
            {" "}
            {link.name}
          </Link>
        );
      })}
      ;<h1>Outer layout</h1>
      {children}
    </>
  );
}
