import React, { useState } from "react";
import { Form } from "../../components/formComponents/form/Form";
import { UserCard } from "../../components/userCard/UserCard";
import { Notification } from "../../components/formComponents/notification/Notification";
import styles from "./styles.module.css";

import { IUserFormState } from "../../interfaces/IUserFormState";

const initialFormSate = {
  name: "",
  surname: "",
  birthday: "",
  country: "Poland",
  gender: "",
  imgFile: {},
  consent: false,
};

function FormPage() {
  const [dataForm] = useState<IUserFormState>(initialFormSate);
  const [isNotification, setIsNotification] = useState(false);
  const [userCards, setUserCards] = useState<IUserFormState[]>([]);

  function changeStateAddCard(dataFromForm: IUserFormState): void {
    setIsNotification(true);

    setTimeout(() => {
      setIsNotification(false);
    }, 500);

    setUserCards((state: IUserFormState[]): IUserFormState[] => {
      const userCards: IUserFormState[] = [...state];
      userCards.push(dataFromForm);

      return userCards;
    });
  }

  return (
    <div className={styles.formPage}>
      {isNotification ? <Notification /> : null}
      <Form changeStateAddCard={changeStateAddCard} dataForm={dataForm} />
      {userCards.map((item, index) => {
        return <UserCard key={index} card={item} />;
      })}
    </div>
  );
}

export { FormPage };
