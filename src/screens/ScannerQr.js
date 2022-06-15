import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { SafeAreaView } from "react-native-safe-area-context";

const ScannerQr = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Apunta al codigo qr");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData " + data);
  };

  if (hasPermission == null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Solicitando permiso para camara</Text>
      </SafeAreaView>
    );
  }

  if (hasPermission == false) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ margin: 10 }}>Sin acceso a la camara</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: "50%", height: "100%", position: "absolute" }}
        />
      </View>
      <Text>{text}</Text>
      {scanned && (
        <Button
          title="Desea escanear otra vez"
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    /*     justifyContent: "center",
     */ height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});

export default ScannerQr;
