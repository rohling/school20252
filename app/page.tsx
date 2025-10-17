import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import Courses from "./components/Courses";

export default function Home() {
  return (
        <div>
          <Header/>
          <Banner/>
          <Courses/>
          <h1 className="text-green-200 text-center" >Rodapé</h1>
        </div>
  );
}
