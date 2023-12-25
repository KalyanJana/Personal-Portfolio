import React, { useState } from "react";
import {
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";
import "./ViewQuestions.css";
import { useSelector } from "react-redux";

function ViewQuestions() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  const findBlog = user.blogs?.find((blog) => blog._id === id);

  console.log("use", user);
  // const questions = [
  //   {
  //     id: 1,
  //     question: "What is the capital of France?",
  //     options: ["Paris", "Berlin", "London", "Madrid"],
  //     answer: "Paris",
  //   },
  //   {
  //     id: 2,
  //     question: "Which programming language is known for building web pages?",
  //     options: ["Java", "Python", "JavaScript", "C#"],
  //     answer: "JavaScript",
  //   },
  //   // Add more questions as needed
  // ];

  return (
    <div className="question-page">
      <Typography variant="h3">Question Answer</Typography>

      <div className="questionWrapper">
        <List>
          {findBlog.questions.map((q, index) => (
            <ListItem key={q.id}>
              <div>
                <p>{`Q${index+1}.  `}{q.question}</p>
                {q.option1 && <p>{` 1.`}{q.option1}</p>}
                {q.option2 && <p>{` 2.`}{q.option2}</p>}
                {q.option3 && <p>{` 3.`}{q.option3}</p>}
                {q.option4 && <p>{` 4.`}{q.option4}</p>}
                <p>Correct Answer: {q.answer}</p>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default ViewQuestions;
