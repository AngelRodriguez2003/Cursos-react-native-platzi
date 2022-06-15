import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { capitalize } from "lodash";

const Stats = ({ stats }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Styles</Text>
      {stats.map((item) => {
        return (
          <View key={item.stat.name} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <Text>Barrita</Text>
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
    color: "6B6B6B",
  },
});
