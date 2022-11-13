import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runConfetti } from "../lib/utils";
import { useStateContext } from "../context/StateContext";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Obrigado pelo seu pedido!</h2>
        <p className="email-msg">Verifique seu e-mail para o seu recibo.</p>
        <p className="description">
          Se tiver alguma dúvida, envie-nos um email
          <a className="email" href="mailto:dulziabraga@gmail.com">
            dulziabraga@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
