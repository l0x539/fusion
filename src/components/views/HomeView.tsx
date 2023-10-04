'use client'
import Footer from "../layout/Footer";
import { useSearchParams } from "next/navigation";

const HomeView = () => {
  const searchParams  = useSearchParams();

  return (<>
    <Footer />
  </>);
};

export default HomeView;