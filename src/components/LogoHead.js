import logo from '../images/logo.png';
import '../styles/LogoHead.css';
import { DarkModeButton } from './DarkModeButton';

export function LogoHead(){
  return(
    <div className="LogoHead">
      <img className="LogoHead__logo" src={logo} alt='Logo of head'/>
      <DarkModeButton />
    </div>
  )
}