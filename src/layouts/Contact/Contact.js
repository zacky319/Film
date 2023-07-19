import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import React from "react";
import {
  Button,
  TextInput,
  Select,
  Icon,
  Container,
} from "react-materialize";
const cx = classNames.bind(styles);

function Contact() {
  const handleSubmit =(e)=> {
    e.preventDefault()
    alert(`thành công`);
    
  }
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className={cx("contact")}>
      <Container>
        <h3>Contact us</h3>
        <form onSubmit={handleSubmit}>
          <TextInput id="TextInput-38" label="Your Name" />

          <TextInput id="TextInput-39" label="Your Phone" />

          <TextInput email id="TextInput-41" label="Email" validate />

          <Select
            id="Select-46"
            multiple={false}
            onChange={function noRefCheck() {}}
            value=""
          >
            <option disabled value="">
              Choose your favorite nation
            </option>
            <option value="1">England</option>
            <option value="2">France</option>
            <option value="3">Spain</option>
          </Select>

          <TextInput
            icon="mode_edit"
            id="TextInput-109"
            label="Your content"
          />

          <Button node="button" type="submit" waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
