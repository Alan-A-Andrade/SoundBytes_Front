import HeaderStyled from "./style";
import logo from "../../assets/LogoType.svg"
import menuIcon from "../../assets/menu.svg"
import peopleIcon from "../../assets/peopleIcon.svg"
import shoppingIcon from "../../assets/shoppingCartIcon.svg"

import { useNavigate } from "react-router-dom";

import useShoppingCart from "../../hooks/useShoppingCart";
import useSessionData from "../../hooks/useSessionData";

function Header(props) {

  const navigate = useNavigate()
  const { shoppingCartState } = useShoppingCart()
  const { sessionData } = useSessionData()

  const shoppingCartSize = [...shoppingCartState].length

  return (
    <HeaderStyled>
      <div className="wrapper-menu-icons">
        <img src={menuIcon} onClick={() => props.setMenu(!props.menuState)} alt="Menu de opções do site" />
        <img src={logo} alt="SoundBytes Logotipo" />
      </div>
      <div className="wrapper-menu-icons">
        {sessionData
          ? <img src={peopleIcon} onClick={() => { navigate("/account") }} alt="Sua Conta" />
          : <img src={peopleIcon} onClick={() => { navigate("/sign-in") }} alt="Sua Conta" />
        }

        {sessionData
          ? <h1 className="welcome-user-phrase-menu">Oi, {sessionData.name}</h1>
          : ""
        }
        <img src={shoppingIcon} onClick={() => { navigate("/shopping-cart") }} alt="Seu Carrinho" />
        {shoppingCartSize !== 0
          ? <h1 className="number-shopping-cart-menu">{shoppingCartSize}</h1>
          : ""
        }
      </div>
    </HeaderStyled>
  )
}

export default Header