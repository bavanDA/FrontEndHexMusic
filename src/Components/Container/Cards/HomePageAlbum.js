import React from "react";
import cx from "clsx";
import Cover from "./cover-dsotm.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useSquareCardMediaStyles } from "@mui-treasury/styles/cardMedia/square";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const titleFontSize = "1em";
const subtitleFontSize = "1rem";
const captionFontSize = "0.8rem";
const family = "'Segoe UI', sans-serif";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    padding: 6,
  },
  media: {
    borderRadius: 6,
  },
  title: {
    fontFamily: family,
    fontSize: titleFontSize,
    fontWeight: 600,
    lineHeight: 1.4,
  },
  subtitle: {
    fontFamily: family,
    fontSize: subtitleFontSize,
    fontStyle: "italic",
    lineHeight: 1.2,
  },
  captiongenre: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    color: "#7ba1d5",
    fontSize: captionFontSize,
    lineHeight: 1.2,
  },
  captionyear: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    color: "#d57b7b",
    fontSize: captionFontSize,
    lineHeight: 1.2,
  },
  rating: {
    paddingTop: "0.4rem",
  },
}));

function HomePageAlbum(props) {
  const styles = useStyles();
  const mediaStyles = useSquareCardMediaStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root)}>
      <CardMedia className={cx(styles.media, mediaStyles.root)} image={props.Albm.cover_image} />
      <CardContent>
        <Info>
          <InfoTitle className={styles.title}>{props.Albm.artist[0].name}</InfoTitle>
          <InfoSubtitle className={styles.subtitle}>
            {props.Albm.title}
          </InfoSubtitle>
          <Rating
            className={styles.rating}
            name={"rating"}
            value={props.Albm.rating}
            precision={0.5}
            size={"small"}
            readOnly={true}
          ></Rating>
          <InfoCaption className={styles.captionyear}>{props.Albm.release-date}</InfoCaption>
          <InfoCaption className={styles.captiongenre}>
            {props.Albm.genre[0]}
          </InfoCaption>
        </Info>
      </CardContent>
    </Card>
  );
}
export default HomePageAlbum;
