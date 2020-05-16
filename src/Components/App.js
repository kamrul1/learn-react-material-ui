import React, { Component, Fragment } from "react";
import "../styles.css";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises
  };

  getExcerisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  render() {
    const excercies = this.getExcerisesByMuscles();

    return (
      <Fragment>
        <Header />
        <Exercises excercies={excercies} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
