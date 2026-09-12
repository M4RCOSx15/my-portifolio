import "./information.scss"

import { SectionTitle } from "../sectionTitle/section-title"

export function Info(){
    return(
       <div className="infos">
          <SectionTitle text="Languages-info"/>
          <div className="languages-info">
            <span>EN-basic </span>
            <span>PT-BR native</span>
          </div>
          <SectionTitle text="Education"/>
          <div className="education-info">
            <span></span>
            <span>Computer Science Bachelors - Centro Universitario UNA</span>
          </div>
        </div>
    )
}