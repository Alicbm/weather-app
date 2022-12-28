import { DarkModeButton } from './DarkModeButton';
import { Search } from './Search';
import logo from '../images/logo.png';
import '../styles/LogoSearch.css';

export function LogoSearch(){
  return(
    <div className="LogoSearch">
      <img className="LogoSearch__logo" src={logo} alt='Logo of head'/>
      <div className="LogoSearch__content">
        <DarkModeButton id='toggle-2'/>
        <Search />
      </div>
    </div>
  )
}