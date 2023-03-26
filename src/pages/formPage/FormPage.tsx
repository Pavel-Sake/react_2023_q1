import React from "react";
import { Form } from "../../components/formComponents/form/Form";
import { UserCard } from "../../components/userCard/UserCard";
import { Notification } from "../../components/formComponents/notification/Notification";
import styles from "./styles.module.css";
import { IDataFromForm } from "../../interfaces/IStateForForm";

type MyProps = {
  message?: string;
};

type MyState = {
  cardFromForm: IDataFromForm[];
  isNotification: boolean;
};
class FormPage extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      cardFromForm: [],
      isNotification: false,
    };
  }

  changeStateAddCard = (dataFromForm: IDataFromForm): void => {
    const arr = [...this.state.cardFromForm, { ...dataFromForm }];

    this.setState({ cardFromForm: arr });
    this.setState({ isNotification: true });

    setTimeout(() => {
      this.setState({ isNotification: false });
    }, 500)
  };
  render() {
    return (
      <div className={styles.formPage}>
        {this.state.isNotification ? <Notification /> : null}
        <Form changeStateAddCard={this.changeStateAddCard} />
        {this.state.cardFromForm.map((item, index) => {
          return <UserCard key={index} card={item} />;
        })}
      </div>
    );
  }
}

export { FormPage };
