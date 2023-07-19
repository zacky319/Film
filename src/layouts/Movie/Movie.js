import styles from "./Movie.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Button, Icon, TextInput } from "react-materialize";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const cx = classNames.bind(styles);

export default function New() {
  const [movie, setMovie] = useState([]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ListOfFilms, setListOfFilms] = useState([]);
  const userLogin = JSON.parse(window.localStorage.getItem("userLogin"));



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
    setOpen(false);

  };
  const handleDeleteOpen1 = () => {
    setDelete(true);
  };
  const handleCloseDelete = () => {

    setDelete(false);

  };
  const handleCloseEdit = () => {
    setEdit(false)
  }
  const handleOpenEdit = () => {
    setEdit(true)

  }



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
  const deleteFims = async () => {

    try {
      await fetch(`https://649c1b5a04807571923776db.mockapi.io/ListOfFilms/${movie?.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      toast.success(`success!`);

    } catch (error) {
      console.error(error);
      toast.error(`error!`);

    }
    handleCloseDelete()
  };

  const editFims = async (data) => {

    try {
      const response = fetch(`https://649c1b5a04807571923776db.mockapi.io/ListOfFilms/${movie?.id}`, {
        method: 'PUT',
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
    handleCloseDelete()
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://649c1b5a04807571923776db.mockapi.io/ListOfFilms');
        const jsonData = await response.json();
        setListOfFilms(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    console.log(123);
  }, [Delete,edit]);

  useEffect(() => {
    document.title = "Movie";
  }, []);
  return (
    
    <div className={cx("contact-container")}>
      {ListOfFilms.map((item, index) => (
        <div className={cx("cardlight")} key={index}>
          <img src={item.image} alt="" />
          <i
            className="material-icons"
            onClick={() => {
              handleClickOpen1();
              setMovie(item);
            }}
          >
            personal_video
          </i>
          <div className={cx("card-body")}>
            <div className={cx("title-body")}>
              <h2>{item.name}</h2>
              <h2>
                ({item.nation}-{item.year})
              </h2>
            </div>

            <div >
              <Button
                variant="outlined"
                onClick={() => {
                  setMovie(item);
                  handleClickOpen();
                }}
              >
                Detail
              </Button><br />

              {userLogin?.displayName ?
                <>
                  <Button
                    className="red"
                    onClick={() => {
                      setMovie(item);
                      handleOpenEdit()
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    className="red"
                    onClick={() => {
                      setMovie(item);
                      handleDeleteOpen1()
                    }}
                  >
                    Delete
                  </Button>
                </> : <></>}
            </div>
          </div>
        </div>
      ))}
      <Dialog
        maxWidth={800}
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <h1>{movie.name}</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <>
              <h5 className={cx("content")}> {movie.content}</h5>
            </>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClickOpen1();
              handleClose();
            }}
          >
            Trailer
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth={800}
        maxHeight={800}
        open={open1}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <>
              <div className={cx("")}>
                <iframe
                  width="960"
                  height="415"
                  src={movie.clip}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth={800}
        maxHeight={800}
        open={Delete}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <>

              <h5 className={cx("content")}> Do you want to delete</h5>
            </>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={deleteFims}>Yes</Button>

          <Button className="red" onClick={handleCloseDelete}>No</Button>
        </DialogActions>
      </Dialog>


      <Dialog
        maxWidth={800}
        maxHeight={800}
        open={edit}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseEdit}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div style={{width:500}}>
            <form onSubmit={handleSubmit(editFims)}>
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
          <Button className="red" onClick={handleCloseEdit}>Cancel</Button>

        </form>
            </div>
          </DialogContentText>
        </DialogContent>
        
        {/* <DialogActions>
          <Button onClick={editFims}>Change</Button>

          <Button className="red" onClick={handleCloseEdit}>Cancel</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
