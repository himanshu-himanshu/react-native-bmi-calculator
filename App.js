import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // For selecting measurement units
  const [active, setActive] = useState("SI");

  // For result bmi
  const [result, setResult] = useState(" ");

  // Hook for height
  const [height, setHeight] = useState("");

  // Hook for weight
  const [weight, setWeight] = useState("");

  // Function to calculate bmi
  const calculateBMI = () => {
    if (height === "" || weight === "") {
      alert("Inputs cannot be empty");
      return;
    } else {
      if (active === "SI") {
        let newHeight = height * 0.01;
        let bmi = weight / (newHeight * newHeight);
        setResult(Math.round(bmi * 10) / 10);
        setHeight("");
        setWeight("");
      } else {
        let newHeight = height * 0.0254;
        let newWeight = weight * 0.453592;
        let bmi = newWeight / (newHeight * newHeight);
        setResult(Math.round(bmi * 10) / 10);
        setHeight("");
        setWeight("");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>BMI Calculator</Text>
      <View style={styles.radioButtonView}></View>
      <View style={styles.switchView}>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            active == "SI" ? styles.purple : styles.white,
          ]}
          onPress={() => setActive("SI")}
        >
          <Text style={active == "SI" ? styles.button : styles.btn}>
            kg / cm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            active == "IP" ? styles.purple : styles.white,
          ]}
          onPress={() => setActive("IP")}
        >
          <Text style={active == "IP" ? styles.button : styles.btn}>
            lb / in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputsView}>
        <TextInput
          style={styles.inputField}
          placeholder={
            active === "SI" ? "Enter height (cm)" : "Enter height (inch)"
          }
          onChangeText={(text) => setHeight(text)}
          value={height}
        />
        <TextInput
          style={styles.inputField}
          placeholder={
            active === "SI" ? "Enter weight (kg)" : "Enter weight (lb)"
          }
          onChangeText={(text) => setWeight(text)}
          value={weight}
        />
      </View>
      <TouchableOpacity
        style={[styles.btnContainer, , styles.purple]}
        onPress={() => calculateBMI()}
      >
        <Text style={[styles.button]}>Calculate BMI</Text>
      </TouchableOpacity>
      {<Text style={styles.resultText}>Your BMI: {result}</Text>}
      <Text style={styles.author}>Submitted By Himanshu (301296001)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: "28dp",
    fontWeight: "700",
    color: "purple",
  },
  inputsView: {
    marginVertical: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    fontSize: "20dp",
    backgroundColor: "#F9F9F9",
    padding: 10,
    marginVertical: 10,
    width: "70%",
  },
  btnContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 2,
    margin: 20,
  },
  button: {
    color: "white",
    fontWeight: "700",
    fontSize: "18dp",
  },
  resultText: {
    marginTop: 40,
    fontSize: "20dp",
    fontWeight: "600",
    color: "#888888",
    letterSpacing: 0.5,
  },
  switchView: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
  purple: {
    backgroundColor: "purple",
    borderWidth: 2,
    borderColor: "purple",
  },
  white: {
    backgroundColor: "white",
    borderWidth: 2,
  },
  btn: {
    color: "black",
    fontWeight: "700",
    fontSize: "18dp",
  },
  author: {
    margin: 20,
    fontWeight: "700",
    color: "lightgrey",
  },
});
