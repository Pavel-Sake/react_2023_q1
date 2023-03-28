import React, { useState } from "react";
import { Form } from "../../components/formComponents/form/Form";
import { UserCard } from "../../components/userCard/UserCard";
import { Notification } from "../../components/formComponents/notification/Notification";
import styles from "./styles.module.css";
import { FieldValues, SubmitHandler } from "react-hook-form";
//import { IDataFromForm } from "../../interfaces/IStateForForm";

import { IUserFormState } from "../../interfaces/IUserFormState";
import { log } from "util";

const initialFormSate = {
  name: "",
  surname: "",
  birthday: "",
  country: "",
  gender: "",
  imgFile: {},
  consent: false,
};

function FormPage() {
  const [dataForm, setDataForm] = useState<IUserFormState>(initialFormSate);
  const [isNotification, setIsNotification] = useState(false);

  function changeStateAddCard(dataFromForm: IUserFormState): void {
    // const arr = [...this.state.cardFromForm, { ...dataFromForm }];
    //
    // this.setState({ cardFromForm: arr });
    // this.setState({ isNotification: true });
    //
    setIsNotification(true);

    setTimeout(() => {
      setIsNotification(false);
    }, 500);

    setDataForm(dataFromForm);
  }

  return (
    <div className={styles.formPage}>
      {isNotification ? <Notification /> : null}
      <Form changeStateAddCard={changeStateAddCard} />
      {/*{this.state.cardFromForm.map((item, index) => {*/}
      {/*  return <UserCard key={index} card={item} />;*/}
      {/*})}*/}
    </div>
  );
}

export { FormPage };
