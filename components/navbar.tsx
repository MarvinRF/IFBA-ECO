"use client";

import * as React from "react";
import { Leaf } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-2">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-bold">IFBA - Concientização</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <a
              href="#inicio"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Casos
            </a>
            <a
              href="#apoio"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Ajuda
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {/* <Button className="bg-green-600 hover:bg-green-700">
              Participe
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
