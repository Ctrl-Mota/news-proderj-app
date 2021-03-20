import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "94%",
    minHeight: 200,
  },
  promotionImage: {
    width: "50%",
  },
  descriptionText: {
    flex: 1,
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    margin: 5,
  },
  priceText: {
    color: "#4f4a4a",
    fontWeight: "bold",
    fontSize: 13,
    margin: 5,
  },
  linkButton: {
    backgroundColor: "#2196F3",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  textLinkButton: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
});

export const PostList = {
  minHeight: "90%",
  maxHeight: "90%",
  backgroundColor: "#ffffff",
};
export const BodyContainer = styled.View`
  background-color: #ffffff;
  align-self: flex-end;
  padding-bottom: 50px;
`;
export const ScrollContainer = styled.ScrollView.attrs((props) => ({
  endFillColor: "#ffffff",
}))``;
