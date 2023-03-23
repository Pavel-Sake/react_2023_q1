import React from "react";
import styles from "./stules.module.css";
import { IInput } from "../../../interfaces/IPageFormData";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";

type TypesLibrary = {
  text: string | undefined;
  date: string | undefined;
  radio: string | undefined;
  checkbox: string | undefined;
};

type MyProps = {
  data: IInput;
  changeState: (text: string | undefined, name: string) => void;
  errorData?: {
    isValid: boolean | null | undefined;
    errorText: string | undefined;
  };
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

  handleInputBasedType = (
    type: string,
    keyWord: string,
    value: string,
    checked: string
  ) => {
    const typesLibrary: TypesLibrary = {
      text: this.nameRef.current?.value,
      date: this.nameRef.current?.value,
      radio: value,
      checkbox: checked,
    };

    const valueResult = typesLibrary[type as keyof typeof typesLibrary];

    this.props.changeState(valueResult, keyWord);
  };
  render() {
    const { type, label, name, keyWord, value } = this.props.data;
    const { isValid, errorText } = this.props.errorData!;

    return (
      <div>
        <label className={styles.label}>
          <input
            className={styles.input}
            type={type}
            name={name}
            ref={this.nameRef}
            onChange={() => {
              const checked: boolean | undefined =
                this.nameRef.current?.checked;

              const checkedString = String(checked);
              this.handleInputBasedType(type, keyWord, value, checkedString);
            }}
          />
          {label}
        </label>
        {/*{!isValid ? <div>{errorText}</div> : null}*/}
        <ErrorValidation text={errorText} isValid={isValid} />
      </div>
    );
  }
}

export { Input };
