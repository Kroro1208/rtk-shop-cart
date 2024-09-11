"use client"
import { useDispatch } from "react-redux"
import type { RootState } from '../feature/store';
import { useSelector } from "react-redux";
import { openModal } from "../modal/ModalSlice";
import { CartItem } from "./CartItem";
import EmptyCard from "./EmptyCard";

export const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, total, cartItems } = useSelector((state: RootState) => ({
        amount: state.cart.amount,
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }));

    if(amount < 1) {
        return (
            <EmptyCard />
    )}

    return (
        <div className='container mx-auto p-4'>
        <section className='bg-white rounded-lg shadow-md p-6'>
            <header className='mb-4'>
                <h2 className='text-2xl font-bold'>買い物かご</h2>
            </header>
            <div className='space-y-4'>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        amount={item.amount}
                    />
                ))}
            </div>
            <footer className='mt-4'>
                <hr className='mb-4' />
                <div className='flex justify-center items-center'>
                    <h4 className='text-lg font-semibold'>小計 {amount} 個の商品(税込み) :</h4>
                    <span className='text-lg font-semibold'>{total}円</span>
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(openModal())}
                    className='mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600'>
                    全ての商品の選択解除
                </button>
            </footer>
        </section>
    </div>
    )
}