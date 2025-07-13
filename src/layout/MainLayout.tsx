import React from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen w-full grid grid-cols-4 grid-rows-[150px_1fr_1fr] justify-center">
      {children}
    </main>
  );
}
