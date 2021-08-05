import { data } from './generator';
import './header.scss';

const Header = ({ handleSmoothScroll }) => {
  return (
    <header className = 'header'>
      <img className = 'header__logo' src = {data.image} alt = '' />
      <div className = 'header__content'>
        <button className = 'button button__indigo' onClick = { handleSmoothScroll }> { data.btn_indigo } </button>
        <a href = 'http://t.me/OnayJumysDemoBot' className = 'button button__outline header__outline'> { data.btn_outline } </a>
      </div>
    </header>
  )
}

export default Header;