import React, { useState } from "react";
import ProductsScreen from "./screens/Products/ProductsScreen/ProductsScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [activeScreen, setactiveScreen] = useState("ProductsScreen");

  const goToProductsScreen = () => setactiveScreen("ProductsScreen");
  const goToCartScreen = () => setactiveScreen("CartScreen");

  const renderScreen = () => {
    switch (activeScreen) {
      case "ProductsScreen":
        return <ProductsScreen />;
      case "CartScreen":
        return <CartScreen />;
      default:
        return <div>Page Not Found</div>;
    }
  };
  return (
    <>
      <Header
        goToProductsScreen={goToProductsScreen}
        goToCartScreen={goToCartScreen}
      />
      {renderScreen()}
    </>
  );
};

export default App;
