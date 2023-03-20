import React from "react";
import { Form } from "../../components/formComponents/form/Form";

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
        <Form message="ddd" />
      </>
    );
  }
}

export { FormPage };
