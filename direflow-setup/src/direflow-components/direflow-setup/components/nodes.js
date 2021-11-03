import React from "react";
import { Diamond, Circle } from "./shapes";
import { Handle } from "react-flow-renderer";
import LoginModule from "./modules/login-module";
import emailImage from "../assets/email.png";
import { DatabaseOutlined } from "@ant-design/icons";

export const ImageNode = ({ data }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <img src={data.image} alt={data.alt} />
      <Handle type="input" position="top" />
    </div>
  );
};

export const ModuleNode = ({ data }) => {
  const Module = data.module;
  return (
    <div
      className="module-node"
      style={{
        border: "1px solid #A3A3A3",
        padding: "12px",
      }}
      disabled={true}
    >
      <Module data={data} />
    </div>
  );
};

export const nodeTypes = {
  diamond: Diamond,
  circle: Circle,
  img: ImageNode,
  module: ModuleNode,
};

/** This is out default canvas with one of each proof of concept elements
 * Available node types are:
 * - Default
 * - Module (I created a login module which is basically a React screen code)
 * - Diamond: custom diamond shape
 * - Image: some image rendered in a div
 * - Circle: custom circle shape with icons. I used antdesign but we can use our FontAwesome as well
 * */
export const initialElements = [
  {
    id: "1",
    data: { label: "Successful Login Screen!" },
    position: {
      x: 772,
      y: 380,
    },
  },
  {
    id: "2",
    type: "module",
    data: { title: "Login", errorMessage: "Login Error", module: LoginModule },
    position: {
      x: 98,
      y: 122,
    },
  },
  {
    id: "3",
    type: "diamond",
    position: {
      x: 606,
      y: 264,
    },
    data: { label: "SUCCESS" },
  },
  {
    id: "4",
    type: "img",
    position: {
      x: 268,
      y: 607,
    },
    data: { image: emailImage, alt: "Email Icon Image" },
  },
  {
    id: "5",
    type: "circle",
    position: {
      x: 525,
      y: 514,
    },
    data: {
      icon: <DatabaseOutlined style={{ fontSize: "2.2rem" }} />,
    },
  },
  {
    source: "2",
    type: "smoothstep",
    sourceHandle: "Login-right-1",
    target: "3",
    targetHandle: "diamond-3",
    id: "reactflow__edge-2Login-right-1-3diamond-3",
    arrowHeadType: "arrowclosed",
  },
  {
    source: "3",
    sourceHandle: "diamond-2",
    type: "smoothstep",
    target: "1",
    targetHandle: null,
    id: "reactflow__edge-3diamond-2-1null",
    label: "Yes",
    arrowHeadType: "arrowclosed",
    labelStyle: { fill: "green", fontWeight: 700 },
  },
  {
    source: "2",
    sourceHandle: "login-input-1",
    type: "smoothstep",
    target: "5",
    targetHandle: "circle-1",
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-2login-input-1-5circle-1",
  },
  {
    source: "3",
    sourceHandle: "diamond-1",
    target: "2",
    targetHandle: "login-error-1",
    label: "No",
    arrowHeadType: "arrowclosed",
    type: "smoothstep",
    labelStyle: { fill: "red", fontWeight: 700 },
    id: "reactflow__edge-3diamond-1-2login-error-1",
  },
  {
    source: "2",
    sourceHandle: "create-account-1",
    type: "smoothstep",
    target: "4",
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-2create-account-1-4null",
  },
];
