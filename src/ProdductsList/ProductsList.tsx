import type { RootState } from "./../app/store";
import { products } from "../products/products";
import { useSelector } from "react-redux";
import "./ProductsList.css";
import useProductsList from "./useProductsList";
import qrCode from "./../img/SolanaQR/solana.jpg";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import bannerForBuyForm from "./../img/Another/bannerBuyForm.jpg";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const ProductList = () => {
  const { arrWithFilter, isFilter, solanaCourse } = useSelector(
    (state: RootState) => state.products,
  );

  const {
    handleProductListBuyButt,
    handleProductBuyButt,
    handleCancelButt,
    productForBuy,
    handleProductChange,
    conversionAmount,
    handelNextBannerButt,
    handelPreviousBannerButt,
    buyStatus,
    paymentStatus,
    boughtProduct,
    selectBanner,
  } = useProductsList(solanaCourse);

  const dataToRender = isFilter ? arrWithFilter : products;
  const dataToRenderLength = dataToRender.length;

  const verifPhone_Crypto =
    boughtProduct.payment === "crypto" && boughtProduct.number !== "";
  const verifPhone_AnotherPaym =
    boughtProduct.number !== "" &&
    (boughtProduct.payment === "cash" || boughtProduct.payment === "card");

  console.log(buyStatus.value);

  return (
    <div
      className="productList"
      style={{ position: buyStatus.value ? "fixed" : "static" }}
    >
      {buyStatus.value && (
        <div className="productList__background">
          <button onClick={handleCancelButt} className="productList__background-button"></button>
        </div>
      )}
      {buyStatus.value && (
        <div className="productList__buyItem">
          {productForBuy(buyStatus.id, dataToRender).map((product) => (
            <div
              className="productList__buyItem-list"
              key={product.id}
            >
              <img
                className="productList__buyItem-img"
                src={product.image}
                alt="Product"
              />
              <table className="productList__buyItem-table">
                <tbody>
                  <tr>
                    <td className="productList__buyItem-info">Product</td>
                    <td className="productList__buyItem-info">
                      {product.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="productList__buyItem-info">Model</td>
                    <td className="productList__buyItem-info">
                      {product.model}
                    </td>
                  </tr>
                  <tr>
                    <td className="productList__buyItem-info">Price</td>
                    <td className="productList__buyItem-info">
                      ${product.price}
                    </td>
                  </tr>
                  <tr>
                    <td className="productList__buyItem-info">Weight</td>
                    <td className="productList__buyItem-info">
                      {product.weight}kg
                    </td>
                  </tr>
                  <tr>
                    <td className="productList__buyItem-info">Deliver</td>
                    <td className="productList__buyItem-info">
                      {product.delivery}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          <form className="productList__buyItem-form">
            <label className="productList__buyItem-label">
              Your full name
              <input
                className="productList__buyItem-input"
                name="fullName"
                type="text"
                onChange={handleProductChange}
              />
            </label>
            <label className="productList__buyItem-label">
              Your phone number
              <input
                name="number"
                className="productList__buyItem-input"
                type="text"
                placeholder="Type of number: 0938432015 "
                onChange={handleProductChange}
              />
              {(verifPhone_AnotherPaym || verifPhone_Crypto) && (
                <p className="productList__buyItem-text">
                  Our manager will contact with you
                </p>
              )}
            </label>
            <div className="productList__buyItem-container">
              <div>
                <label className="productList__buyItem-payment">
                  Payment type:
                </label>
                <label className="productList__select-label">
                  Card
                  <input
                    name="payment"
                    value="card"
                    type="radio"
                    onChange={handleProductChange}
                  />
                </label>
                <label className="productList__select-label">
                  Cash
                  <input
                    name="payment"
                    value="cash"
                    type="radio"
                    onChange={handleProductChange}
                  />
                </label>
                <label className="productList__select-label">
                  Crypto
                  <input
                    name="payment"
                    value="crypto"
                    type="radio"
                    onChange={handleProductChange}
                  />
                </label>
              </div>
              {boughtProduct.payment !== "crypto" && (
                <img
                  className="productList__buyItem-banner"
                  src={bannerForBuyForm}
                  alt="banner"
                />
              )}
              {boughtProduct.payment === "crypto" && (
                <img
                  className="productList__buyItem-picture"
                  src={qrCode}
                  alt="solscan Qr"
                />
              )}
            </div>
            {!paymentStatus.isPayment && (
              <p className="productList__buyItem-error">Select payment type</p>
            )}
            {boughtProduct.payment === "crypto" && (
              <div>
                <label>Do transaction and paste solscan URL</label>
                <input
                  className="productList__buyItem-solLink"
                  name="url"
                  onChange={handleProductChange}
                  type="text"
                />
                <div className="productList__buyItem-transaction">
                  <p>
                    Course Solana/USD = {solanaCourse.solana}/{solanaCourse.usd}
                    USD
                  </p>
                  <p>To pay: {conversionAmount()} Sol </p>
                </div>
                <p className="productList__buyItem-incognito">
                  If you want be incognito, write delivery address in solscan
                  transaction label
                </p>
              </div>
            )}

            {!paymentStatus.incognitoCrypto && (
              <p className="productList__buyItem-error">
                Lands of Url must have informathion if your payment type: crypto
              </p>
            )}
            {!paymentStatus.crypto && (
              <p className="productList__buyItem-error">
                Number must have correct type
              </p>
            )}
            {!paymentStatus.another && (
              <p className="productList__buyItem-lands">
                All lands must have informathion if your payment type: card or
                cash, and number must have correct type
              </p>
            )}
            <Button
              variant="contained"
              color="success"
              className="productList__buyItem-button"
              type="button"
              onClick={handleProductBuyButt}
            >
              Buy
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={handleCancelButt}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}
      <div className="productList__banner">
        <img
          src={selectBanner.src}
          className="productList__bannerImg"
          alt="banner"
        />
        <Fab
          size="small"
          className="productList__banner-butt--next"
          type="button"
          onClick={handelNextBannerButt}
        >
          <ArrowForwardIosOutlinedIcon className="productList__banner-butt-picture" />
        </Fab>
        <Fab
          size="small"
          className="productList__banner-butt--previous"
          type="button"
          onClick={handelPreviousBannerButt}
        >
          <ArrowBackIosNewOutlinedIcon className="productList__banner-butt-picture" />
        </Fab>
      </div>
      {dataToRenderLength === 0 && (
        <div className="productList__message">
          <h2 className="productList__message-title">No result</h2>
        </div>
      )}
      <div className="productList__list">
        {dataToRender.map((product) => (
          <div
            className="productList__item"
            key={product.id + product.model}
          >
            <img
              src={product.image}
              alt="Product"
              className="productList__item-img"
            />
            <p className="productList__item-p">{product.name}</p>
            <p className="productList__item-p">Model: {product.model}</p>
            <p className="productList__item-p">Price: ${product.price}</p>
            <p className="productList__item-p">Weight: {product.weight}kg</p>
            <p className="productList__item-p">Delivery: {product.delivery}</p>
            <Button
              variant="contained"
              color="success"
              className="productList__item-butt--buy"
              type="button"
              onClick={() => handleProductListBuyButt(product)}
            >
              Buy
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
