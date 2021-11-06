import React from "react";

export default function ClassInfo(props) {
  // perform axios call
  const data = "123";

  if (data) {
    return <div>Class Info</div>;
  } else {
    return <div>404</div>;
  }
}
