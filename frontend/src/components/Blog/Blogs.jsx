import { Button, Typography } from "@mui/material";
import React from "react";
import "./Blogs.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteBlog, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

import Cards from "./Cards";

export const BlogCard = ({
  questions,
  blogImage,
  blogsTitle,
  description,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteBlog(id));
    dispatch(getUser());
  };

  return (
    <>
      {/* <a href={url} className="blogCard" target="black"> */}
      {/* <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div> */}
      <div className="blogCard">
        <Cards
          blogImage={blogImage}
          id={id}
          description={description}
          questions={questions}
          blogsTitle={blogsTitle}
        />
        {/* <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography> */}
        {isAdmin && (
          <div className="blog-action">
            <Button
              style={{ color: "rgba(40,40,40,0.7)" }}
              onClick={() => deleteHandler(id)}
            >
              <Delete />
            </Button>
            <Link
              style={{ color: "rgba(40,40,40,0.7)" }}
              to={`/admin/blog/${id}`}
            >
              <EditIcon />
            </Link>
          </div>
        )}
      </div>
      {/* </a> */}
    </>
  );
};

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs">
      <Typography variant="h3">
        Blogs <AiOutlineProject />
      </Typography>

      <div className="blogsWrapper">
        {blogs?.map((item) => (
          <BlogCard
            id={item._id}
            key={item._id}
            questions={item.questions}
            blogImage={item.image.url}
            blogsTitle={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        Do let me know your feedback <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Blogs;
