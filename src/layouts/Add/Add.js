import styles from "./Add.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import {
  Button,
  Container,
  Icon,

  TextInput,
} from "react-materialize";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const cx = classNames.bind(styles);

export default function CaiThu3() {
  const SignupSchema = yup.object().shape({
    name: yup.string().required(),
    year: yup.number().required(),
    nation: yup.string().required(),
    image: yup.string().url().required(),
    clip: yup.string().url().required(),
    content: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = (data) => {


    try {
      const response = fetch('https://649c1b5a04807571923776db.mockapi.io/ListOfFilms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(response);
      toast.success(`success!`);
    } catch (error) {
      console.error(error);
      toast.error(`error!`);

    }

    console.log(data)
  }

  useEffect(() => {
    document.title = "Add Moive";
  }, []);
  return (
    <div className={cx("contact-container")}>

      <Container>
        <h3>Add Movie</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            id="TextInput-38"
            label="Name"
            {...register("name")}
          />
          {errors.name && <p style={{color:"red"}}>Can't be left blank or formatted incorrectly</p>}

          <TextInput id="TextInput-39" label="Year" {...register("year")} />
          {errors.year && <p style={{color:"red"}}>Can't be left blank or formatted incorrectly</p>}

          <TextInput id="TextInput-39" label="Nation" {...register("nation")} />
          {errors.nation && <p style={{color:"red"}}>Can't be left blank or formatted incorrectly</p>}

          <TextInput id="TextInput-39" label="Link clip " {...register("clip")} />
          {errors.clip && <p style={{color:"red"}}>Can't be left blank or formatted incorrectly</p>}

          <TextInput id="TextInput-39" label="Link Img" {...register("image")} />
          {errors.image && <p style={{color:"red"}}>Can't be left blank or formatted incorrectly</p>}


          <TextInput
            icon="mode_edit"
            id="TextInput-109"
            label="Your content" {...register("content")}
          />
          {errors.content && <p style={{color:"red"}}>Can't be left blank or formatted incorrectly</p>}

          <Button node="button" type="submit" waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </form>
      </Container>
    </div>
  );
}
