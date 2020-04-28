import React, { Component } from "react";
import "./project.css";
import { Container, Form, NavLink, Table, Button } from "reactstrap";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import ReactDOM from "react-dom";
import "./project.css";

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class CreateCalender extends Component {
  render() {
    return (
        <div className="center">
      <div className="calen">
        <InfiniteCalendar>
          width={400}
          height={600}
          selected={today}
          disabledDays={[0, 6]}
          minDate={lastWeek}
        </InfiniteCalendar><br />
        <Button className="blue" href='/create'>จดบันทึก</Button>
      </div>
      </div>
    );
  }
}

export default CreateCalender;
