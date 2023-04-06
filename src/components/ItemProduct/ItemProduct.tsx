import React, { FC, useState } from "react";
import { ItemProductDefault } from "./itemProductDefault/ItemProductDefault";
import { ItemProductExtended } from "./itemProdectExtended/ItemProdectExtended";

import styles from "./styles.module.css";
import { ICharacterCard } from "../../interfaces/ICharacterCard";

type MyProps = {
  data: ICharacterCard;
};

const ItemProduct: FC<MyProps> = ({ data }) => {
  const [isCardStateNormal, setIsCardStateNormal] = useState(true);
  function handleOnClickCardState() {
    setIsCardStateNormal((state) => {
      return !state;
    });
  }

  return (
    <li className={styles.item} data-testid="product-item">
      <ItemProductDefault
        data={data}
        changeCardState={handleOnClickCardState}
      />
      {!isCardStateNormal ? (
        <ItemProductExtended
          data={data}
          changeCardState={handleOnClickCardState}
        />
      ) : null}
    </li>
  );
};

export { ItemProduct };
