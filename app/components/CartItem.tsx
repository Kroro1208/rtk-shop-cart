"use client"
import type { CartItem as  CartItemType} from "@/type";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { TbShoppingCartMinus } from "react-icons/tb";
import { decrease, increase, removeItem } from "../feature/CartSlice";

type CartItemProps = CartItemType;

export const CartItem: React.FC<CartItemProps> = ({id, title, price, img, amount}) => {
    const dispatch = useDispatch();

    return (
        <article className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
            <div className="flex items-center">
                <Image src={img} alt={title} className='w-24 h-24 object-cover rounded-lg hover:scale-[2.5] transition-all duration-300' />
                <div className="ml-4">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <h4 className="font-semibold">{price}</h4>
                    <button
                        type="button"
                        onClick={() => dispatch(removeItem(id))}
                        className='text-red-500 hover:text-red-700'>
                        <FaRegTrashAlt />
                    </button>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    type="button"
                    onClick={() => dispatch(increase(id))}
                    className='text-green-500 hover:text-green-700'>
                    <MdAddShoppingCart />
                </button>
                <p className="mx-2">{amount}</p>
                <button
                    type="button"
                    onClick={() => dispatch(decrease(id))}
                    className='text-red-500 hover:text-red-700'>
                    <TbShoppingCartMinus />
                </button>
            </div>
        </article>
    )

}