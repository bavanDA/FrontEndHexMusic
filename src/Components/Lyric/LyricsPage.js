import axios from "axios";
import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import Annotation from "./Annotation/Annotation";
import LyricsDisplay from "./LyricsDisplay";
import "./Song.css";
class LyricsPage extends Component {
  state = {
    song: {
      lyrics: "",
      comments: [],
      loading: true,
    },
    annotations: [
      {
        id: 1,
        author_id: "2",
        start_index: "8",
        end_index: "39",
        body: "PB - classic late night snack",
        song_id: "1",
        updated_at: "2016-07-11T17:24:19.009Z",
        author: "songsta",
      },
      {
        id: 53,
        author_id: "1",
        start_index: "41",
        end_index: "52",
        body: "Write something interesting...I am wiring things because it is very intersting and we should all listen to the way that this will look on screen and yeah!",
        song_id: "1",
        updated_at: "2017-10-10T02:10:07.462Z",
        author: "guest",
      },
      {
        id: 25,
        author_id: "1",
        start_index: "60",
        end_index: "83",
        body: "Write something interesting...",
        song_id: "1",
        updated_at: "2016-07-28T17:07:36.955Z",
        author: "guest",
      },
      {
        id: 62,
        author_id: 1,
        start_index: 84,
        end_index: 88,
        body: "kkkkkkkkk",
        song_id: 1,
        updated_at: "2017-12-23T06:27:29.608Z",
        author: "guest",
      },
      {
        id: 161,
        author_id: 1,
        start_index: 90,
        end_index: 93,
        body: "Testinng this thing",
        song_id: 1,
        updated_at: "2021-05-26T15:09:54.958Z",
        author: "guest",
      },
      {
        id: 81,
        author_id: 1,
        start_index: 96,
        end_index: 102,
        body: "yo",
        song_id: 1,
        updated_at: "2018-05-27T01:07:12.353Z",
        author: "guest",
      },
      {
        id: 80,
        author_id: 1,
        start_index: 107,
        end_index: 116,
        body: "jjjjWrite something interesting...",
        song_id: 1,
        updated_at: "2018-05-21T10:38:37.611Z",
        author: "guest",
      },
      {
        id: 54,
        author_id: 1,
        start_index: 124,
        end_index: 136,
        body: "Write something interesting...",
        song_id: 1,
        updated_at: "2017-10-10T21:06:32.925Z",
        author: "guest",
      },
      {
        id: 49,
        author_id: 1,
        start_index: 151,
        end_index: 160,
        body: "super cool, yeah",
        song_id: 1,
        updated_at: "2017-10-29T02:59:28.201Z",
        author: "guest",
      },
      {
        id: 116,
        author_id: 1,
        start_index: 171,
        end_index: 172,
        body: "Write something interesting...",
        song_id: 1,
        updated_at: "2019-11-11T17:15:29.069Z",
        author: "guest",
      },
      {
        id: 76,
        author_id: 1,
        start_index: 195,
        end_index: 205,
        body: "Write something interesting...ddd",
        song_id: 1,
        updated_at: "2018-04-27T10:14:32.833Z",
        author: "guest",
      },
      {
        id: 153,
        author_id: 1,
        start_index: 207,
        end_index: 225,
        body: "yo",
        song_id: 1,
        updated_at: "2020-09-09T03:01:45.597Z",
        author: "guest",
      },
      {
        id: 66,
        author_id: 1,
        start_index: 241,
        end_index: 276,
        body: "Words man!",
        song_id: 1,
        updated_at: "2018-01-10T08:53:26.047Z",
        author: "guest",
      },
      {
        id: 111,
        author_id: 1,
        start_index: 282,
        end_index: 290,
        body: "a high five",
        song_id: 1,
        updated_at: "2019-08-13T13:24:10.305Z",
        author: "guest",
      },
      {
        id: 32,
        author_id: 1,
        start_index: 293,
        end_index: 306,
        body: "nice",
        song_id: 1,
        updated_at: "2016-08-11T00:26:36.019Z",
        author: "guest",
      },
      {
        id: 92,
        author_id: 1,
        start_index: 317,
        end_index: 324,
        body: "Badass annotation stuff",
        song_id: 1,
        updated_at: "2018-10-27T11:08:13.151Z",
        author: "guest",
      },
      {
        id: 83,
        author_id: 15,
        start_index: 327,
        end_index: 345,
        body: "Peanut",
        song_id: 1,
        updated_at: "2018-06-08T15:36:25.988Z",
        author: "yayayay",
      },
      {
        id: 90,
        author_id: 1,
        start_index: 352,
        end_index: 415,
        body: "Yes, here it is.",
        song_id: 1,
        updated_at: "2018-10-05T15:48:27.672Z",
        author: "guest",
      },
      {
        id: 51,
        author_id: 1,
        start_index: 418,
        end_index: 432,
        body: "Hey Mike!",
        song_id: 1,
        updated_at: "2017-10-07T18:13:04.612Z",
        author: "guest",
      },
      {
        id: 108,
        author_id: 1,
        start_index: 438,
        end_index: 452,
        body: "Writehi something interesting...",
        song_id: 1,
        updated_at: "2019-05-01T09:07:16.142Z",
        author: "guest",
      },
      {
        id: 78,
        author_id: 1,
        start_index: 460,
        end_index: 467,
        body: "Write something interesting...d",
        song_id: 1,
        updated_at: "2018-04-27T10:14:51.878Z",
        author: "guest",
      },
      {
        id: 112,
        author_id: 1,
        start_index: 496,
        end_index: 504,
        body: "y ya estamos\n",
        song_id: 1,
        updated_at: "2019-08-23T17:44:17.143Z",
        author: "guest",
      },
      {
        id: 65,
        author_id: 1,
        start_index: 517,
        end_index: 520,
        body: "This is a test",
        song_id: 1,
        updated_at: "2018-01-05T11:43:46.335Z",
        author: "guest",
      },
      {
        id: 79,
        author_id: 1,
        start_index: 547,
        end_index: 560,
        body: "Writde something interesting...",
        song_id: 1,
        updated_at: "2018-04-27T10:14:58.710Z",
        author: "guest",
      },
      {
        id: 152,
        author_id: 1,
        start_index: 568,
        end_index: 575,
        body: "Write something iwefnteresting...",
        song_id: 1,
        updated_at: "2020-07-05T13:21:31.612Z",
        author: "guest",
      },
      {
        id: 99,
        author_id: 16,
        start_index: 580,
        end_index: 604,
        body: "aaaaaaaa",
        song_id: 1,
        updated_at: "2019-01-30T13:01:31.495Z",
        author: "qwerty",
      },
      {
        id: 115,
        author_id: 1,
        start_index: 616,
        end_index: 618,
        body: "Write something interesting...",
        song_id: 1,
        updated_at: "2019-11-11T15:58:42.823Z",
        author: "guest",
      },
      {
        id: 2,
        author_id: 1,
        start_index: 620,
        end_index: 645,
        body: "Presumably this is drugs",
        song_id: 1,
        updated_at: "2016-07-11T17:42:47.105Z",
        author: "guest",
      },
    ],
    editing: false,
    selectedStart: "",
    selectedEnd: "",
    showInfo: true,
    selectedAnnotationId: "",
  };

  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8000/Lyrics/LyricsAPI/?id=${this.props.songId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          lyrics: res.data.results[0].lyrics,
          loading: false,
        });
      });
  }

  handleHighlightClick = (e) => {
    const element = e.target;
    this.setState({
      popupStyle: this.heightOfElement(element),
      selectedAnnotationId: parseInt(e.target.id),
      showInfo: false,
    });
  };
  handleHighlight = (e) => {
    const selection = window.getSelection();
    const indices = [selection.anchorOffset, selection.focusOffset];
    const sortedIndices = indices.sort((a, b) => a - b);
    this.setState({
      selectedStart: sortedIndices[0],
      selectedEnd: sortedIndices[1],
    });
    if (selection.isCollapsed || this.selectionOverlapping(...sortedIndices)) {
      this.setState({
        showInfo: true,
        selectedAnnotationId: "",
      });
    } else {
      const element = selection.getRangeAt(0);
      this.setState({ popupStyle: this.heightOfElement(element) });
      this.activateAnnotationPrompt();
    }
  };

  heightOfElement = (element) => {
    const style = {};
    const relative = document.body.parentNode.getBoundingClientRect();
    const r = element.getBoundingClientRect();
    const relHeight = r.top - relative.top - 305;
    if (relHeight < 125) {
      style.top = "120px";
    } else {
      style.top = relHeight + "px";
    }
    return style;
  };

  selectionOverlapping = (startIdx, endIdx) => {
    return this.state.annotations.some((annotation) => {
      return !(
        endIdx < annotation.start_index || startIdx > annotation.end_index
      );
    });
  };

  activateAnnotationPrompt = () => {
    this.setState({
      selectedAnnotationId: "prompt",
      showInfo: false,
    });
    window.addEventListener("click", (event) => {
      if (this.state.selectedAnnotationId === "prompt") {
        this.setState({
          showInfo: true,
          selectedAnnotationId: "",
          editing: false,
        });
      }
    });
    console.log("start =" + this.state.selectedStart);
    console.log("end =" + this.state.selectedEnd);
  };

  render() {
    const annotations = this.state.annotations;
    const selection = this.state.selectedAnnotationId;
    if (this.state.loading) {
      return <Loader content="Loading" size="large" inverted />;
    } else {
      return (
        <div className="not-splash">
          <div className="song-left-col">
            <LyricsDisplay
              song={this.state.song}
              annotations={annotations}
              selected={selection}
              onHighlight={this.handleHighlight}
              handleHighlightClick={this.handleHighlightClick}
            />
          </div>
          <div className="song-right-col">
            <Annotation
              popupStyle={this.state.popupStyle}
              selectedStart={this.state.selectedStart}
              selectedEnd={this.state.selectedEnd}
              tempAnnotation={this.tempAnnotation}
              afterSubmit={this.afterSubmit}
              handleCancelCreate={this.handleCancelCreate}
              annotationId={selection}
            />
          </div>
        </div>
      );
    }
  }
}
export default LyricsPage;
