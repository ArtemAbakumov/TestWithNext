import styled from "styled-components";
import Link from "next/link";
import InputMask from "react-input-mask";

const InputStyle = styled.form`
  text-align: center;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
`;
// class TelephoneInput extends Component {
function TelephoneInput(props) {
  return (
    <InputStyle>
      <InputMask
        type="numeric"
        value={props.children}
        mask={props.mask}
        maskChar="_"
        placeholder={props.placeholder}
      />
    </InputStyle>
  );
}
export default TelephoneInput;
