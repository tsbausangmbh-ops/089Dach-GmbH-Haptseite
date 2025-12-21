import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  showAIBerater?: boolean;
}

export default function PageLayout({ children, showAIBerater = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer showAIBerater={showAIBerater} />
    </div>
  );
}
