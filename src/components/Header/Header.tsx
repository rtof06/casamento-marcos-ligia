'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  function toggleMenu(): void {
    setIsOpen((prev) => !prev);
  }

  function handleClickOutside(event: Event): void {
    if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed flex flex-col font-secTitleFont text-xl gap-2 p-4 items-start"
    >
      <button onClick={toggleMenu} className="hover:opacity-70 transition-all">
        ☰
      </button>
      {isOpen && (
        <nav className="flex flex-col gap-2 bg-main-color p-4">
          <Link href="/infos-cerimonia" className="hover:opacity-70 transition-all">
            Informações da cerimônia
          </Link>
          <Link href="/#/historia-casal" className="hover:opacity-70 transition-all">
            História do Casal
          </Link>
          <Link href="/#/lista-presentes" className="hover:opacity-70 transition-all">
            Lista de Presentes
          </Link>
        </nav>
      )}
    </header>
  );
}
