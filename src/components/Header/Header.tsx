"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  function toggleMenu(): void {
    setIsOpen((prev) => !prev);
  }

  function handleClickOutside(event: Event): void {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen ? (
        <header
          ref={headerRef}
          className="fixed flex flex-col font-secTitleFont text-xl gap-2 p-4 items-start z-50"
        >
          <button
            onClick={toggleMenu}
            className="hover:opacity-70 transition-all text-5xl"
          >
            ☰
          </button>
        </header>
      ) : (
        <header
          ref={headerRef}
          className="fixed flex font-secTitleFont text-xl gap-2 h-screen items-start z-50 bg-main-color py-5 pl-4 pr-8 max-sm:w-full max-sm:h-full max-md:h-1/2"
        >
          <button
            onClick={toggleMenu}
            className="hover:opacity-70 transition-all text-4xl font-titleFont px-3"
          >
            X
          </button>
          <nav className="flex flex-col h-screen justify-center gap-2 max-md:h-1/2 max-sm:h-5/6 max-sm:gap-6 max-sm:w-4/5">
            <Link href="/" className="page" onClick={toggleMenu}>
              Início
            </Link>
            <Link
              href="/infos-cerimonia"
              className="page"
              onClick={toggleMenu}
            >
              Informações da cerimônia
            </Link>
            <Link
              href="/#historia-casal"
              className="page"
              onClick={toggleMenu}
            >
              História do Casal
            </Link>
            <Link
              href="infos-cerimonia/#lista-presentes"
              className="page"
              onClick={toggleMenu}
            >
              Lista de Presentes
            </Link>
          </nav>
        </header>
      )}
    </>
  );
}
