import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function DefaultPage({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* ocupar o espaço disponível entre */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
