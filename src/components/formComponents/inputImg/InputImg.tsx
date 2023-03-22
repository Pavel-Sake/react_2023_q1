import React from "react";
import { IInput } from "../../../interfaces/IPageFormData";


type MyProps = {
  updateStateImg: (file: object) => void;
};

type MyState = {};


class InputImg extends React.Component<MyProps, MyState> {
  private readonly fileRef: React.RefObject<HTMLInputElement>;

  constructor(props: MyProps) {
    super(props);

    this.fileRef = React.createRef();
  }
  render() {
    const { updateStateImg } = this.props;
    return (
      <input
        ref={this.fileRef}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={() => {
          const fileImg = this.fileRef.current?.files;
          if (fileImg) {
            updateStateImg(fileImg[0]);
          }

          // const file: any = e.target.files;
          // this.setState({ file: URL.createObjectURL(file[0]) });
        }}
      />
    );
  }
}

export { InputImg };
