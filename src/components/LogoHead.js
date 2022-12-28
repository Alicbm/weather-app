import { DarkModeButton } from './DarkModeButton';
import logo from '../images/logo.png';
import '../styles/LogoHead.css';

export function LogoHead(){
  return(
    <div className="LogoHead">
      <div className="LogoHead__content">
        <img className="LogoHead__logo" src={logo} alt='Logo of head'/>
        <DarkModeButton id='toggle'/>
      </div>
    </div>
  )
}