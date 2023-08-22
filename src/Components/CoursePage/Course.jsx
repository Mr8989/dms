import React from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const params = useParams();
  return <div>course {params?.id}</div>;
};

export default Course;
