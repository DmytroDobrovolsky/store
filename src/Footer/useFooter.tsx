import { useState } from "react";
import { products } from "../products/products";
import utilits from "../utilits/utilits";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fillteredArrSlice, statusSlice } from "../app/slicers/products";
import { useNavigate } from "react-router-dom";

function useFooter() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    weight: 0,
    delivery: "",
  });
  const navigate = useNavigate();

  const { filteredArray } = utilits();
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "weight") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function resetForm() {
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  function filteredProducts() {
    const nameArray = filteredArray(products, formData, "name");

    const deliveryArray = filteredArray(nameArray, formData, "delivery");

    const weightArray = filteredArray(deliveryArray, formData, "weight");

    const priceArray = filteredArray(weightArray, formData, "price");

    return priceArray;
  }

  const handleConfirmButt = () => {
    dispatch(statusSlice(true));
    const filteredArray = filteredProducts();
    dispatch(fillteredArrSlice(filteredArray));
  };

  const handleClearbutt = () => {
    dispatch(statusSlice(false));
    resetForm();
  };

  const handleOrderPageBtn = () => {
    navigate("/OrderPage");
  };

  return {
    handleInputChange,
    handleConfirmButt,
    handleClearbutt,
    handleOrderPageBtn,
    formRef,
  };
}
export default useFooter;
