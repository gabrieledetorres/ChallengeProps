import React from "react";
import Card from "./Components/Card";

export default class Ficha extends React.Component {
  render() {
    return (
      <>
        <Card titulo="Ficha" nome="Gabi" idade={22} estudar="Product" />
      </>
    );
  }
}
