import {HeaderStyle} from './style'
import Button from './../Button'
import { NameEnablerInfo } from '../../providers/NameEnabler';

export default function Header() {
  const { name } = NameEnablerInfo();

  return (
    <HeaderStyle>
      <img src="" alt="Kenzie logo"/>
      <nav>
        <ul>
          <li><Button pointerName={'Todos DEVs'} /></li>
            {name.map((x, index) => 
              <li key={x} ><Button pointerName={x}/></li>
            )}
          <li><Button pointerName={'Facilitadores'}/></li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}
