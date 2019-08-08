import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CalendarView from "./components/CalendarView";
import moment from "moment";
import CustomButton from "../../atoms/CustomButton";

export default class Calendar extends Component {
  state = {
    currentMonth: moment().format('YYYY-MM'),
  };

  handleMonthChange = direction => {
    const { currentMonth } = this.state;
    const monthObj = moment(currentMonth, 'YYYY-MM');
    if (direction === 'left') {
      monthObj.startOf("month").subtract('1', 'month');
    } else {
      monthObj.startOf('month').add('1', 'month');
    }
    this.setState({ currentMonth: monthObj.format("YYYY-MM") });
  };

  render() {
    const { currentMonth } = this.state;
    return (
      <View style={styles.root}>
        <CustomButton
          style={styles.button}
          onPress={() => this.handleMonthChange("left")}
          component={<Text>{"<"}</Text>}
        />

        <CalendarView style={styles.calendar} currentMonth={currentMonth} />
        <CustomButton
          style={styles.button}
          onPress={() => this.handleMonthChange("right")}
          component={<Text>{">"}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrow: {
    flex: 1
  },
  calendar: {
    flex: 10,
  },
  button: {
    margin: 5
  }
});
