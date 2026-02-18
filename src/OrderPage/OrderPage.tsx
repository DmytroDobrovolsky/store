import { useSelector } from "react-redux";
import type { RootState } from "./../app/store";
import { useNavigate } from "react-router-dom";
import "./OrderPage.css";
import banner1 from "./../img/Another/bannerOrderPage.svg";
import Button from "@mui/material/Button";

const OrderPage = () => {
  const { productOrders } = useSelector((state: RootState) => state.products);
  const productsOrderLength = productOrders.length;
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/");
  };

  return (
    <div className="order">
      <div className="order__store">
        <Button
          variant="contained"
          color="success"
          className="order__store-button"
          type="button"
          onClick={handleChangePage}
        >
          Store
        </Button>
        <img
          className="order__store-img"
          src={banner1}
          alt="orderBasket"
        />
      </div>
      <div className="order__container">
        {productsOrderLength === 0 && (
          <div className="order__container-frame">
            <p className="order__container-frame-message">No orders</p>
          </div>
        )}
        {productOrders.map((product) => (
          <div
            className="order__container-product"
            key={product.id + product.model}
          >
            <img
              className="order__product-img"
              src={product.image}
              alt="Product"
            />
            <h2 className="order__product-text">{product.name}</h2>
            <p className="order__container-product-text">
              Model: {product.model}
            </p>
            <p className="order__product-text">Price: ${product.price}</p>
            <p className="order__product-text">Weight: {product.weight}kg</p>
            <p className="order__product-text">Payment: {product.payment}</p>
            {product.fullName !== "" && (
              <p className="order__product-text">
                FullName: {product.fullName}
              </p>
            )}
            {product.number !== "" && (
              <p className="order__product-text">Number: {product.number}</p>
            )}
            {product.url !== "" && (
              <p className="order__product-text">
                Transaction url: {product.url}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default OrderPage;
