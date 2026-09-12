import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import "./social-btns.scss"
interface SocialBtnsProps{

}
export function SocialBtns(props : SocialBtnsProps){
    return(
     <div className="social">
        <a href=""><InstaIcon/></a>
        <a href=""><LinkedInIcon/></a>
     </div>
    )
}