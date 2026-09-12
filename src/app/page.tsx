import Image from "next/image";
import { Header } from "./components/header/header";
import "./styles/home.scss"
export default function Home() {
  return (
   
      <main className="container">
        <Header/>
        <div className="experience">
          <h3>Experience</h3>
          <p>backend developer Oriento - Java(SpringBoot) SpringSecurity </p>
        </div>
        <div className="experience-time"></div>
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
