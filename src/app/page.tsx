"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  const isDark = useSelector((state: RootState) => state.themeChange);
  return (
    <main className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-[#1c1c1d] min-h-screen">
        <Navbar />
        <div className="container mx-auto">
          <h2 className="dark:text-red-500">Social</h2>
        </div>
        <Footer />
      </div>
    </main>
  );
}
