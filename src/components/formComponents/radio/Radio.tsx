import React from "react";
import { Input } from "../input/Input";
import { IInput } from "../../../interfaces/IPageFormData";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";

type MyProps = {
  data: IInput[];
  changeState: (text: string | undefined, name: string) => void;
  errorData?: {
    isValid: boolean | null | undefined;
    errorText: string | undefined;
  };
};

type MyState = {
  state: string;
};

class Radio extends React.Component<MyProps, MyState> {
  errorDataNoError = {
    isValid: true,
    errorText: "",
  };
  render() {
    const { data } = this.props;
    const { isValid, errorText } = this.props.errorData!;
    return (
      <div>
        <div>
          {data.map((item, index) => {
            return (
              <Input
                data={item}
                key={index}
                changeState={this.props.changeState}
                errorData={this.errorDataNoError}
              />
            );
          })}
        </div>
        <ErrorValidation text={errorText} isValid={isValid} />
      </div>
    );
  }
}

export { Radio };
