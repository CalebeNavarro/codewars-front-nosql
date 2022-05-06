import {HeaderStyle} from './style'
import Button from './../Button'
import { NameEnablerInfo } from '../../providers/NameEnabler';
import logo from "../../assets/images/logo.png"

export default function Header() {
  const { name } = NameEnablerInfo();

  return (
    <HeaderStyle>
      <img src={logo} alt="Kenzie logo"/>
      <nav>
        <ul>
          <li><Button pointerName={'Todos DEVs'} /></li>
            {name.map((x, index) => 
              <li key={index} ><Button pointerName={x}/></li>
            )}
          <li><Button pointerName={'Facilitadores'}/></li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}
