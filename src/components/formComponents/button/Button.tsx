import React from "react";

type MyProps = {
  name: string;
};

type MyState = {
  state: string;
};

class Button extends React.Component<MyProps, MyState> {
  render() {
    const { name } = this.props;
    return (
      <>
        <button type="submit">{name}</button>
      </>
    );
  }
}

export { Button };
