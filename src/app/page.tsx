import Image from "next/image";
import { Header } from "./components/header/header";
import "./styles/home.scss"
import { Experience } from "./components/experience/experience";
export default function Home() {
  return (
   
      <main className="container">
        <Header/>
        <Experience/>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>EN-basic </span>
            <span>PT-BR native</span>
          </div>
          <h3>Education</h3>
          <div className="education-info">
            <span></span>
            <span>Computer Science Bachelors - Centro Universitario UNA</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contacte me</button>
        </div>
      </main>
  )
}
