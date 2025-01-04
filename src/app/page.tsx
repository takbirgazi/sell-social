import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h2 className="dark:text-red-500">Social</h2>
      </div>
      <Footer />
    </div>
  );
}
