import React from "react";
import styles from "./stules.module.css";

type MyProps = {
  type: string;
  label: string;
  name: string;
  value: string;
  changeState: (text: string | undefined, name: string) => void;
};

type MyState = {
  state: string;
};

class Input extends React.Component<MyProps, MyState> {
  private readonly nameRef: React.RefObject<HTMLInputElement>;
  constructor(props: MyProps) {
    super(props);

    this.nameRef = React.createRef();
  }
  render() {
    const { type, label, name } = this.props;
    return (
      <label className={styles.label}>
        <input
          className={styles.input}
          type={type}
          name={name}
          ref={this.nameRef}
          onChange={() => {
            this.props.changeState(this.nameRef.current?.value, name);
          }}
        />
        {label}
      </label>
    );
  }
}

export { Input };
