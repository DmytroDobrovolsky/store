import "./Footer.css";
import useFooter from "./useFooter";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Footer() {
  const {
    handleInputChange,
    handleConfirmButt,
    handleClearbutt,
    handleOrderPageBtn,
    formRef,
  } = useFooter();
  return (
    <form
      ref={formRef}
      className="footer"
    >
      <div className="footer__fixedList">
        <div className="footer__fixedList-container">
          <Button
            className="footer__fixedList-button"
            type="button"
            variant="contained"
            onClick={handleOrderPageBtn}
          >
            Orders
            <ShoppingCartIcon
              fontSize="small"
              className="footer__fixedList-img"
            />
          </Button>
          <Button
            className="footer__fixedList-button"
            variant="contained"
            type="button"
            onClick={handleConfirmButt}
          >
            Search
            <SearchOutlinedIcon
              fontSize="small"
              className="footer__fixedList-img"
            />
          </Button>
          <Button
            className="footer__fixedList-button"
            variant="contained"
            type="button"
            onClick={handleClearbutt}
          >
            Clear
            <DeleteOutlinedIcon
              fontSize="small"
              className="footer__fixedList-img"
            />
          </Button>
        </div>
        <h2 className="footer__input-title">
          Select product
          <CategoryOutlinedIcon className="footer__input-picture" />
        </h2>
        <div className="footer__option">
          <label className="footer__input-label">
            Mobile
            <input
              name="name"
              value="Mobile"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            Laptop
            <input
              name="name"
              value="Laptop"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            PC
            <input
              name="name"
              value="PC"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            Mouse
            <input
              name="name"
              value="Mouse"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
        </div>
        <h2 className="footer__input-title">
          Select price range
          <LocalOfferOutlinedIcon className="footer__input-picture" />
        </h2>
        <div className="footer__option">
          <label className="footer__input-label">
            From 1500 to 3500
            <input
              value="From 1500 to 3500 USD"
              name="price"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            From 3500 to 5500
            <input
              value="From 3500 to 5500 USD"
              name="price"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            More than 5500
            <input
              value="More than 5500 USD"
              name="price"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
        </div>
        <h2 className="footer__input-title">
          Select delivery type
          <LocalShippingOutlinedIcon className="footer__input-picture" />
        </h2>
        <div className="footer__option">
          <label className="footer__input-label">
            Free delivery
            <input
              value="Free Delivery"
              name="delivery"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            Paid delivery
            <input
              value="Paid Delivery"
              name="delivery"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
        </div>
        <h2 className="footer__input-title">
          Select weight
          <BalanceOutlinedIcon className="footer__input-picture" />
        </h2>
        <div className="footer__option">
          <label className="footer__input-label">
            2.5 kg
            <input
              value="2.5"
              name="weight"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
          <label className="footer__input-label">
            2.9 kg
            <input
              value="2.9"
              name="weight"
              onChange={handleInputChange}
              type="radio"
              className="footer__input"
            />
          </label>
        </div>
        <h2 className="footer__input-title">
          Our social media
          <a
            className="footer__input-link"
            href="https://www.linkedin.com/in/dmytro-dobrovolsky-0028a83a6/"
          >
            <FacebookOutlinedIcon className="footer__input-picture" />
          </a>
        </h2>
        <div className="footer__option"></div>
      </div>
    </form>
  );
}
export default Footer;
