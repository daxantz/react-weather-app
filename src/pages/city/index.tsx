import React from "react";
import { useParams } from "react-router";

const City: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();

  return <div>{cityId}</div>;
};

export default City;
