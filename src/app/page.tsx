import Image from "next/image";
import { Header } from "./components/header/header";
import "./styles/home.scss"
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";
export default function Home() {
  return (
   
      <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
          <SocialBtns/>
          <button className="primary-btn">contacte me 
             <Image
                      src="/emailicon.png"
                      alt="Emailicon"
                      width={20
                      }
                      height={20}
                      priority
                    />
          </button>
        </div>
      </main>
  )
}
