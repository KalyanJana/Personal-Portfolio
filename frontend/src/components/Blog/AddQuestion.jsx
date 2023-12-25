import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { BlogCard } from "../Blog/Blogs";

const AddQuestion = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const {id} = useParams()

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  
  
  

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("questions", question)
    // console.log("option1", option1)
    // console.log("option2", option2)
    // console.log("option3", option3)
    // console.log("option4", option4)
    // console.log("answer", answer)

    await dispatch(addQuestion(question, option1, option2, option3, option4, answer, id ));
    dispatch(getUser());
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      alert.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>

        <Typography variant="h4">
            Question Section
        </Typography>

        <input
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Option 1"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Option 2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Option 3"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Option 4"
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="adminPanelInputs"
          />
          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.blogs &&
            user.blogs.map((item) => (
              <BlogCard
                id={item._id}
                key={item._id}
                blogsTitle={item.title}
                blogImage={item.image.url}
                description={item.description}
                questions={item.questions}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
