import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Linking,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import Styles from "../styles";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.centeredView}>
        <View style={Styles.cardView}>
          <Image
            style={Styles.promotionImage}
            source={{ uri: this.props.data.imagePath }}
            onPress={async () => {
              const supported = await Linking.canOpenURL(
                this.props.data.imagePath
              );
              if (supported) {
                await Linking.openURL(this.props.data.imagePath);
              }
            }}
          />
          <View style={Styles.descriptionText}>
            <Text style={Styles.titleText}>{this.props.data.title}</Text>
            <Text style={Styles.priceText}>{this.props.data.summary}</Text>
            <Button
              style={Styles.linkButton}
              title="Ler Mais"
              onPress={() => {
                Alert.alert(
                  this.props.data.title,
                  this.props.data.content,
                  [
                    {
                      text: "fechar",
                    },
                  ],
                  { cancelable: false }
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Post;
