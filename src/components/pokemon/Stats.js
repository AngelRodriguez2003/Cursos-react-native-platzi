import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { capitalize } from "lodash";

const Stats = ({ stats }) => {
  const barStyles = (num) => {
    const color = num > 49 ? "green" : "red";
    return { ...styles.bar, backgroundColor: color, width: `${num}%` };
  };
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Styles</Text>
      {stats.map((item) => {
        return (
          <View key={item.stat.name} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.number}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={barStyles(item.base_stat)} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6B6B6B",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#d6d6d6",
    width: "80%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    /* backgroundColor: "red",
    width: "50%", */
    height: "100%",
  },
});
