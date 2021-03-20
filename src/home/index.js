import React, { Component } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Icon,
  ScrollView,
  RefreshControl,
  Button,
} from "react-native";
import { api } from "../../domain/api";
import Post from "./components/post";
import Styles, { BodyContainer, ScrollContainer, PostList } from "./styles";
//import Styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionsComplete: false,
      loading: true,
      news: null,
      refreshing: false,
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Noticias do momento",
    };
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.loadingApp();
  }

  handleRefresh = () => {
    setTimeout(() => this.loadingApp(), 1500);
  };
  loadingApp = async () => {
    this.setState({ refreshing: true });
    await api
      .get("news")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            news: response.data,
            refreshing: false,
          });
          console.log(this.state.news);
        }
      })
      .catch((error) => {
        this.setState({
          refreshing: false,
        });
        Alert.alert(
          "Erro de conexão!",
          "Não foi possivel conectar com o servidor, favor verificar sua internet!",
          [
            {
              text: "Tentar Novamente",
              onPress: () => {
                this.loadingApp();
              },
            },
          ],
          { cancelable: false }
        );
      });
  };

  _renderRow(rows) {
    return (
      <FlatList
        style={Styles.scrollView}
        data={rows}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        }
      />
    );
  }

  render() {
    return (
      <BodyContainer style={Styles.container}>
        {this._renderRow(this.state.news)}
      </BodyContainer>
    );
  }
}
