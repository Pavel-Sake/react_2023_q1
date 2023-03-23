import React from "react";

type MyProps = {
  text: string | undefined;
  isValid: boolean | null | undefined;
};
class ErrorValidation extends React.Component<MyProps> {
  render() {
    const { text, isValid } = this.props;
    return <>{!isValid ? <div>{text}</div> : null}</>;
  }
}

export { ErrorValidation };
