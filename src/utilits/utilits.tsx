import { Product, FormData } from "../Type/Type";

function utilits() {
  const pricePeriod = {
    firstPeriod: "From 1500 to 3500 USD",
    secondPeriod: "From 3500 to 5500 USD",
    thirdPeriod: "More than 5500 USD",
  };

  const filteredArray = (array: Product[], obj: FormData, key: string) => {
    const resultArray: Product[] = [];
    const objValue = obj[key as keyof typeof obj];

    if (objValue !== "" && key === "price") {
      if (objValue === pricePeriod.firstPeriod) {
        return array.filter(
          (product) => product.price >= 1500 && product.price <= 3500,
        );
      }
      if (objValue === pricePeriod.secondPeriod) {
        return array.filter(
          (product) => product.price >= 3500 && product.price <= 5500,
        );
      }
      if (objValue === pricePeriod.thirdPeriod) {
        return array.filter((product) => product.price >= 5500);
      }
    } else if (objValue !== "" && objValue !== 0) {
      array.forEach((product) => {
        let productValue = product[key as keyof typeof obj];
        if (productValue === objValue) {
          resultArray.push(product);
        }
      });
      return resultArray;
    }
    return array;
  };

  return { filteredArray };
}
export default utilits;
