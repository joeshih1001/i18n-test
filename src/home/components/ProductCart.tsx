import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  price: number;
}

export const ProductCard: FC<Props> = ({ title, price, id }) => {
    const navigation = useNavigate()
    const handleClickProduct = () => {
        navigation(`/productPage/${id}`)
      }
  return (
    <div className="rounded-2xl bg-white p-8 cursor-pointer" onClick={handleClickProduct}>
      <p className="text-font28w500">{title}</p>
      <div>
        <div className="text-2xl py-5">
          價格 : <span>{price}</span>
        </div>
        
      </div>
    </div>
  );
};
