import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Space, Input, Row } from "antd";
import { Handle } from "react-flow-renderer";

const { Title } = Typography;

const Login = ({ data }) => {
  const [isLogin] = useState(data.title === "Login");
  return (
    <div style={{backgroundColor: 'white'}}>
      <Space direction="vertical">
      <Handle type="input" position="left" id={`${data.title}-left-1`} />
        <Row justify="space-between" style={{padding: '0 15px'}}>
          <Title>{data.title}</Title>
          {data.errorMessage && (
            <span style={{ color: "red" }}>
              {data.errorMessage}
              <Handle
                type="target"
                position="right"
                id="login-error-1"
                style={{ top: "13%", right: "4%" }}
              />
            </span>
          )}
        </Row>
        <p>Choose one of the following {data.title} styles</p>
        <Space size="small">
          <Button type="primary" shape="round" size="middle">
            With Facebook
          </Button>
          <Button type="danger" shape="round" size="middle">
            With Google
          </Button>
        </Space>

        <p>Or email address</p>

        <Input placeholder="Email" />

        <Input placeholder="Password" />
        {/* Custom Handle that looks like brackets -
            can adjust styling to be proportional of elements it is supposed to include
        */}
        {isLogin && (
          <Handle
            type="source"
            position="right"
            id="login-input-1"
            style={{
              top: "70%",
              width: "15px",
              height: "40px",
              borderRadius: 0,
              backgroundColor: "transparent",
              border: "2px dashed grey",
              borderLeft: "0",
            }}
          />
        )}

        <Row justify="space-between">
          <Button type="primary" shape="round" size="middle">
            {data.title}
          </Button>

          {isLogin && (
            <div>
              <p>Create an Account</p>{" "}
              <Handle type="source" position="bottom" id="create-account-1" style={{ left: "75%" }} />
            </div>
          )}
        </Row>
        <Handle type="source" position="right" id={`${data.title}-right-1`} />
        
      </Space>
    </div>
  );
};

export default Login;
