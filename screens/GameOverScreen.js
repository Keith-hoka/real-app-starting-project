import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const [detectedDeviceWidth, setDetectedDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [detectedDeviceHeight, setDetectedDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setDetectedDeviceWidth(Dimensions.get("window").width);
      setDetectedDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <TitleText style={styles.titleText}>The Game is Over!</TitleText>
          <View
            style={{
              ...styles.imageContainer,
              ...{
                width: detectedDeviceWidth * 0.7,
                height: detectedDeviceWidth * 0.7,
                borderRadius: (detectedDeviceWidth * 0.7) / 2,
                marginVertical: detectedDeviceHeight / 30,
              },
            }}
          >
            <Image
              // source={require("../assets/success.png")}
              source={{
                url: "https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/istockphoto-485966046-612x612.jpg",
              }}
              style={styles.image}
              resizeMode="cover"
              fadeDuration={1000}
            />
          </View>
          <View
            style={{
              ...styles.resultContainer,
              ...{ marginVertical: detectedDeviceHeight / 60 },
            }}
          >
            <BodyText
              style={{
                ...styles.resultText,
                ...{ fontSize: detectedDeviceHeight < 400 ? 16 : 20 },
              }}
            >
              Your iPhone needed{" "}
              <Text style={styles.highlight}>{props.numberOfGuess} </Text>rounds
              to guess the number{" "}
              <Text style={styles.highlight}>{props.correctNumber}</Text>
            </BodyText>
          </View>
          <MainButton onPress={props.newGame}>NEW GAME</MainButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 30,
  },
  imageContainer: {
    // borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    // width: Dimensions.get("window").width * 0.7,
    // height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    // marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 50,
    // marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    // fontSize: Dimensions.get("window").height < 400 ? 15 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

export default GameOverScreen;
