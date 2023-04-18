import React, { useEffect, useState } from "react";
import { Form } from "../../components/formComponents/form/Form";
import { UserCard } from "../../components/userCard/UserCard";
import { Notification } from "../../components/formComponents/notification/Notification";
import styles from "./styles.module.css";

import { IUserFormState } from "../../interfaces/IUserFormState";
import { useAppSelector } from "../../hooks/redux";

const initialFormSate = {
  name: "",
  surname: "",
  birthday: "",
  country: "Poland",
  gender: "",
  imgFile: null,
  consent: false,
};

function FormPage() {
  const [dataForm] = useState<IUserFormState>(initialFormSate);
  const [isNotification, setIsNotification] = useState(false);

  const { cards } = useAppSelector((state) => state.cardForm);

  useEffect(() => {
    setIsNotification(true);

    setTimeout(() => {
      setIsNotification(false);
    }, 500);
  }, [cards]);

  return (
    <div className={styles.formPage} data-testid="form-page">
      {isNotification ? <Notification /> : null}
      <Form dataForm={dataForm} />
      {cards.map((item, index) => {
        return <UserCard key={index} card={item} />;
      })}
    </div>
  );
}

export { FormPage };
