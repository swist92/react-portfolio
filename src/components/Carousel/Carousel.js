import React from "react";

import Card from "../Card/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Nav";

import chill from "../../images/chill.jpg";
import mood from "../../images/mood.jpg";
import beehave from "../../images/beehave.jpg";
import notes from "../../images/notes.jpg";
import files from "../../images/files.jpg";
import budget from "../../images/budget.jpg"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Project 1: Uplift",
          subTitle: "First project of UA Coding Bootcamp.",
          imgSrc: chill,
          link: "https://www.swist92.github.io/project1vibe/",
          link: "https://github.com/swist92/project1vibe",
          selected: false,
        },
        {
          id: 1,
          title: "Project 2: Send Moods",
          subTitle: "Second project of UA Coding Bootcamp.",
          imgSrc: mood,
          link: "https://project-2-mood-music.herokuapp.com/",
          selected: false,
        },
        {
          id: 2,
          title: "Project 3: Bhave ",
          subTitle: "Third project of UA Coding Bootcamp.",
          imgSrc: beehave,
          link: "https://www.youtube.com/",
          //above link is placeholder
          selected: false,
        },
        {
          id: 3,
          title: "Note Taker",
          subTitle: "Write, save, and delete notes.",
          imgSrc: notes,
          link: "https://ancient-ocean-75095.herokuapp.com/",
          selected: false,
        },
        {
          id: 4,
          title: "Employee Tracker",
          subTitle: "Manage employee databases by creating, updating, and removing employees.",
          imgSrc: files,
          link: "https://swist92.github.io/employee-tracker/",
          link: "https://github.com/swist92/employee-tracker",
          selected: false,
        },
        {
          id: 5,
          title: "Progressive Budget",
          subTitle: "Tracking your spending and income offline with updates posted once user is online again.",
          imgSrc: budget,
          link: "https://budget-tracker2020.herokuapp.com/",
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };
  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
