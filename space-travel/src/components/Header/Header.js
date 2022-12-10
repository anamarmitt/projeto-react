import React from "react";
import { HeaderContainer } from "./Header.styled";
import cartIcon from "../../Assets/IMG/Vectorcart.svg";
import searchIcon from "../../Assets/IMG/Vectorsearch.svg";
import travelIcon from "../../Assets/IMG/VectorTravel.svg";

const Header = (props) => {
  const { goToCartScreen, goToProductsScreen } = props;
  return (
    <HeaderContainer>
      <a></a>

      <div>
        <input placeholder="Search" />
        <button>
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div className="button-group">
        <button onClick={goToProductsScreen}>
          <img src={travelIcon} alt="planet icon" />
        </button>

        <button onClick={goToCartScreen}>
          <img src={cartIcon} alt="cart icon" />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
