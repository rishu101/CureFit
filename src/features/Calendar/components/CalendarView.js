import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import moment from 'moment';
import { getDaysForMonth } from '../../../utils/helper';

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default class CalendarView extends Component {
  renderDaysHeader = () => {
    return (
      <View style={styles.dayHeader}>
        {days.map((day, index) => (
          <Text key={day + index} style={styles.day}>
            {day}
          </Text>
        ))}
      </View>
    );
  };

  renderMonth = () => {
    const { currentMonth } = this.props;
    let { days, startDayIndex } = getDaysForMonth(currentMonth);
    const count = 0;
    const rows = [];

    while (count < days.length) {
      const rowDays = days.slice(0, 7 - (startDayIndex - 1));
      rows.push(this.renderDaysRow(startDayIndex - 1, rowDays));
      days.splice(0, 7 - (startDayIndex - 1));
      startDayIndex = 1;
    }
    return rows;
  };

  renderDaysRow = (blanks, dates) => {
    return (
      <View style={styles.datesRow}>
        {this.displayEmptyDays(blanks)}
        {dates.map((date, index) => (
          <Text key={date + index} style={styles.date}>
            {date}
          </Text>
        ))}
        {this.displayEmptyDays(7 - (dates.length + blanks))}
      </View>
    );
  };

  displayEmptyDays = blanks => {
    const res = [];
    while (blanks--) {
      res.push(<View style={styles.empty} />);
    }
    return res;
  };

  render() {
    const { currentMonth } = this.props;
    return (
      <View style={styles.root}>
        <Text style={styles.date}>{currentMonth}</Text>
        {this.renderDaysHeader()}
        {this.renderMonth()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 50,
  },
  day: {
    color: '#757575',
    padding: 10,
    fontSize: 20,
  },
  date: {
    color: '#424242',
    padding: 10,
    fontSize: 15
  },
  dayHeader: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  empty: {
    padding: 10,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
