import * as React from "react";
import { useExcersie1Data } from "./data";
import Excersice1View from "./view";

const Excersise1 = () => {
  const { list, onViewUserLocation } = useExcersie1Data();
  return <Excersice1View list={list} onViewUserLocation={onViewUserLocation} />;
};

export default Excersise1;
