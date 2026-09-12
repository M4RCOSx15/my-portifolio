import Image from "next/image"
import "./header.scss"
export function Header(){
    return(
       <div className="header">

         <div>
         <h1>Hi, I´m Marcos👾</h1>
         <h2>Software developer</h2>
         </div>
          <Image
          src="/Solaire.png"
          alt="Next.js logo"
          width={325}
          height={277}
          priority
        />
        </div>
    );
            
}

  