import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

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
      <View>
        <Text>Solicitando permiso para camara</Text>
      </View>
    );
  }

  if (hasPermission == false) {
    return (
      <View>
        <Text style={{ margin: 10 }}>Sin acceso a la camara</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    /*     <View style={styles.container}>
      <View style={styles.barcodebox}> */
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    />

    /*       </View>
      <Text>{text}</Text>
      {scanned && (
        <Button
          title="Desea escanear otra vez"
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
    </View> */
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
     */ height: 600,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});

export default ScannerQr;
