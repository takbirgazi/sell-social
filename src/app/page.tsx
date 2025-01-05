"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Theme from "@/components/Theme/Theme";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  const isDark = useSelector((state: RootState) => state.themeChange);
  return (
    <main className={isDark ? "dark" : ""}>
      <Navbar />
      <div className="container mx-auto">
        <h2 className="dark:text-red-500">Social</h2>
        <Theme />
      </div>
      <Footer />
    </main>
  );
}
