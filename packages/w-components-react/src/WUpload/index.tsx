import React from "react";
import { Button } from "antd";

export default (props: any) => {
  console.log(props);
  return (
    <div className="w-components-upload">
      <Button>上传{props.times}</Button>
    </div>
  );
};
