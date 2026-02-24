import "./FiltersBar.css";
import useFiltersBar from "./useFiltersBar";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function FiltersBar() {
  const {
    handleInputChange,
    handleConfirmButt,
    handleClearbutt,
    handleOrderPageBtn,
    formData,
    formRef,
  } = useFiltersBar();
  return (
    <form
      ref={formRef}
      className="filtersBar"
    >
      <div className="filtersBar__fixedList">
        <div className="filtersBar__fixedList-container">
          <Button
            className="filtersBar__fixedList button"
            type="button"
            variant="contained"
            onClick={handleOrderPageBtn}
          >
            Orders
            <ShoppingCartIcon
              fontSize="small"
              className="filtersBar__fixedList-img"
            />
          </Button>
          <Button
            className="filtersBar__fixedList button"
            variant="contained"
            type="button"
            onClick={handleConfirmButt}
          >
            Search
            <SearchOutlinedIcon
              fontSize="small"
              className="filtersBar__fixedList-img"
            />
          </Button>
          <Button
            className="filtersBar__fixedList button"
            variant="contained"
            type="button"
            onClick={handleClearbutt}
          >
            Clear
            <DeleteOutlinedIcon
              fontSize="small"
              className="filtersBar__fixedList-img"
            />
          </Button>
        </div>
        <h2 className="filtersBar__input-title">
          Select product
          <CategoryOutlinedIcon className="filtersBar__input-picture" />
        </h2>
        <div className="filtersBar__option">
          <label className="filtersBar__input-label">
            Mobile
            <input
              name="name"
              value="Mobile"
              checked={formData.name === "Mobile"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            Laptop
            <input
              name="name"
              value="Laptop"
              checked={formData.name === "Laptop"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            PC
            <input
              name="name"
              value="PC"
              checked={formData.name === "PC"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            Mouse
            <input
              name="name"
              value="Mouse"
              checked={formData.name === "Mouse"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
        </div>
        <h2 className="filtersBar__input-title">
          Select price range
          <LocalOfferOutlinedIcon className="filtersBar__input-picture" />
        </h2>
        <div className="filtersBar__option">
          <label className="filtersBar__input-label">
            From 1500 to 3500
            <input
              value="From 1500 to 3500 USD"
              name="price"
              checked={formData.price === "From 1500 to 3500 USD"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            From 3500 to 5500
            <input
              name="price"
              value="From 3500 to 5500 USD"
              checked={formData.price === "From 3500 to 5500 USD"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            More than 5500
            <input
              name="price"
              value="More than 5500 USD"
              checked={formData.price === "More than 5500 USD"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
        </div>
        <h2 className="filtersBar__input-title">
          Select delivery type
          <LocalShippingOutlinedIcon className="filtersBar__input-picture" />
        </h2>
        <div className="filtersBar__option">
          <label className="filtersBar__input-label">
            Free delivery
            <input
              value="Free Delivery"
              name="delivery"
              checked={formData.delivery === "Free Delivery"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            Paid delivery
            <input
              value="Paid Delivery"
              name="delivery"
              checked={formData.delivery === "Paid Delivery"}
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
        </div>
        <h2 className="filtersBar__input-title">
          Select weight
          <BalanceOutlinedIcon className="filtersBar__input-picture" />
        </h2>
        <div className="filtersBar__option">
          <label className="filtersBar__input-label">
            2.5 kg
            <input
              value="2.5"
              checked={formData.weight === 2.5}
              name="weight"
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
          <label className="filtersBar__input-label">
            2.9 kg
            <input
              value="2.9"
                 checked={formData.weight === 2.9 }
              name="weight"
              onChange={handleInputChange}
              type="radio"
              className="filtersBar__input"
            />
          </label>
        </div>
        <h2 className="filtersBar__input-title">
          Our social media
          <a
            className="filtersBar__input-link"
            href="https://www.linkedin.com/in/dmytro-dobrovolsky-0028a83a6/"
          >
            <FacebookOutlinedIcon className="filtersBar__input-picture" />
          </a>
        </h2>
        <div className="filtersBar__option"></div>
      </div>
    </form>
  );
}
export default FiltersBar;
