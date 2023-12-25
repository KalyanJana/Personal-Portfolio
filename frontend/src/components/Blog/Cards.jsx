import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link } from "react-router-dom";
import QuestionPage from "./ViewQuestions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({
  blogsTitle,
  blogImage,
  id,
  description,
  questions,
}) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blogsTitle,
          text: description,
          url: window.location.href,
        });
      } else {
        console.log("Web Share API not supported");
        // Fallback or show a message to the user
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={blogsTitle}
        subheader="September 14, 2016"
      />
      <Link to={`/blogs/${id}`} style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="194"
          image={blogImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing style={{ width: "100%" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleShare}>
          <ShareIcon />
        </IconButton>

        <ExpandMore
          // expand={expanded}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <Link to={`/blogs/${id}`}>
            <ChevronRightOutlinedIcon />
          </Link>
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
