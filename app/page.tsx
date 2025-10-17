import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import Courses from "./components/Courses";

export default function Home() {
  return (
        <div>
          <Header/>
          <Banner/>
          <Courses/>
        </div>
  );
}
