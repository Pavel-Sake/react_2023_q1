import React from "react";

type MyProps = {
  type: string;
  label: string;
  name: string;
  value?: string;
};

type MyState = {
  state: string;
};
class Input extends React.Component<MyProps, MyState> {
  render() {
    const { type, label, name } = this.props;
    return (
      <label>
        {label}
        <input type={type} name={name} />
      </label>
    );
  }
}

export { Input };
