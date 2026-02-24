import { useState, useEffect } from "react";
import { Product, solanaCourse } from "../Type/Type";
import { useDispatch } from "react-redux";
import { productOrderSlice } from "../app/slicers/products";
import { banners } from "../img/Banners/banners";

function useProductsList(solanaCourse: solanaCourse) {
  const [buyStatus, setBuyStatus] = useState({
    value: false,
    id: 0,
  });
  const [boughtProduct, setBoughtProduct] = useState({
    id: 0,
    name: "",
    weight: 0,
    image: "",
    model: "",
    fullName: "",
    number: "",
    payment: "",
    url: "",
    price: 0,
  });
  const [paymentStatus, setPaymentStatus] = useState({
    incognitoCrypto: true,
    crypto: true,
    another: true,
    isPayment: true,
  });

  const [selectBanner, setSelectBanner] = useState({
    id: 1,
    src: banners[0].src,
  });

  const dispatch = useDispatch();

  const productForBuy = (id: number, array: Product[]) => {
    const result = array.filter((item) => item.id === id);

    return result;
  };

  const conversionAmount = () => {
    const price = boughtProduct.price / solanaCourse.usd;
    const roundedPrice = Number(price.toFixed(3));

    return roundedPrice;
  };

  const handelNextBannerButt = () => {
    setSelectBanner((prev) => {
      const nextId = prev.id + 1;
      const nextBanner =
        banners.find((banner) => banner.id === nextId) || banners[0];
      return {
        id: nextBanner.id,
        src: nextBanner.src,
      };
    });
  };

  const handelPreviousBannerButt = () => {
    setSelectBanner((prev) => {
      const previoustId = prev.id - 1;
      const previousBanner =
        banners.find((banner) => banner.id === previoustId) ||
        banners[banners.length - 1];
      return {
        id: previousBanner.id,
        src: previousBanner.src,
      };
    });
  };

  const handleProductListBuyButt = (product: Product) => {
    setBuyStatus({
      value: true,
      id: product.id,
    });

    setBoughtProduct((prev) => ({
      ...prev,
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      image: product.image,
      model: product.model,
    }));
  };

  const handleProductBuyButt = () => {
    const requiredPhoneLength = 10;
    const phoneNumber = boughtProduct.number;
    const fullName = boughtProduct.fullName;
    const payment = boughtProduct.payment;
    const isntNumber = isNaN(Number(phoneNumber));

    const isFieldsInvalid =
      phoneNumber.length !== requiredPhoneLength || isntNumber;

    const isCashOrCard = payment === "cash" || payment === "card";

    if (payment === "") {
      setPaymentStatus((prev) => ({ ...prev, isPayment: false }));
      return;
    }
    if (
      isCashOrCard &&
      (isFieldsInvalid || fullName === "" || phoneNumber === "")
    ) {
      setPaymentStatus((prev) => ({ ...prev, another: false }));
      return;
    }
    if (payment === "crypto" && boughtProduct.url === "") {
      setPaymentStatus((prev) => ({ ...prev, incognitoCrypto: false }));
      return;
    }
    if (
      payment === "crypto" &&
      boughtProduct.url !== "" &&
      phoneNumber !== "" &&
      isFieldsInvalid
    ) {
      setPaymentStatus((prev) => ({ ...prev, crypto: false }));
      return;
    }

    dispatch(productOrderSlice(boughtProduct));
    handleCancelButt();
  };

  const handleCancelButt = () => {
    setBuyStatus({
      id: 0,
      value: false,
    });

    setPaymentStatus({
      incognitoCrypto: true,
      crypto: true,
      another: true,
      isPayment: true,
    });

    setBoughtProduct({
      id: 0,
      name: "",
      weight: 0,
      image: "",
      model: "",
      fullName: "",
      number: "",
      payment: "",
      url: "",
      price: 0,
    });
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setBoughtProduct((prev) => ({ ...prev, [name]: value }));
    setPaymentStatus({
      isPayment: true,
      another: true,
      crypto: true,
      incognitoCrypto: true,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectBanner((prev) => {
        const nextId = prev.id + 1;
        const nextBanner = banners.find((b) => b.id === nextId) || banners[0];
        return {
          id: nextBanner.id,
          src: nextBanner.src,
        };
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    handleProductListBuyButt,
    handleProductBuyButt,
    handleCancelButt,
    productForBuy,
    handleProductChange,
    conversionAmount,
    handelNextBannerButt,
    handelPreviousBannerButt,
    selectBanner,
    buyStatus,
    paymentStatus,
    boughtProduct,
  };
}
export default useProductsList;
