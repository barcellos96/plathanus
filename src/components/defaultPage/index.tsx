import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function DefaultPage({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
