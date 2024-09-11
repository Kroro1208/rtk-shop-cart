"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { caluculateTotal } from "./feature/CartSlice";
import type { RootState } from "./feature/store";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { CartConteiner } from "./components/CartConteiner";

export default function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    dispatch(caluculateTotal());
  }, [cartItems, dispatch]);
  return (
    <main>
      { isOpen && <Modal />}
      <Navbar />
      <CartConteiner />
    </main>
  );
}
