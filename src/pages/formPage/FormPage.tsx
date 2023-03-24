import React from "react";
import { Form } from "../../components/formComponents/form/Form";
import { UserCard } from "../../components/userCard/UserCard";
import styles from "./styles.module.css";

type MyProps = {
  message: string;
};

type MyState = {
  state: string;
};
class FormPage extends React.Component<MyProps, MyState> {
  render() {
    return (
      <>
        <div className={styles.formPage}>
          <Form />
          <UserCard />
          <UserCard />
        </div>
      </>
    );
  }
}

export { FormPage };
