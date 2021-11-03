import React, {useState, useRef, useEffect} from "react";

import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    removeElements,
    Controls,
    updateEdge,
} from "react-flow-renderer";
import {nodeTypes, initialElements} from "../components/nodes";
import Sidebar from "../components/sidebar";

let id = 0;
const getId = () => `dndnode_${id++}`;

const MainContainer = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);
    const [selected, setSelected] = useState(null);
    const [nodeName, setNodeName] = useState("");

    useEffect(() => {
        setElements((els) => {
            if (!selected) return els;
            return els.map((el) => {
                if (el.id === selected.id) {
                    el.data = {
                        ...el.data,
                        label: nodeName,
                    };
                }
                return el;
            });
        });
    }, [nodeName, selected, setElements]);

    const refreshSelected = () => {
        setSelected(null);
        setNodeName("");
    };

    const onUpdateName = (label) => {
        setNodeName(label);
    };

    const onElementClick = (event, element) => {
        if (element && element.data && element.data.label) {
            setSelected(element);
            setNodeName(element.data.label);
        } else {
            setSelected(null);
            setNodeName("");
        }
    };

    const onConnect = (params) =>
        setElements((els) => {
            return addEdge({...params, type: "smoothstep"}, els);
        });
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => {
            return removeElements(elementsToRemove, els);
        });

    const onLoad = (_reactFlowInstance) =>
        setReactFlowInstance(_reactFlowInstance);

    const onDragOver = (event) => {
        event.preventDefault();
        if (event.dataTransfer.dropEffect !== "none")
            event.dataTransfer.dropEffect = "move";
    };

    const onEdgeUpdate = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els));

    const onNodeDragStop = (event, node) => console.log("drag stop", node);

    const onDrop = (event) => {
        event.preventDefault();
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData("application/reactflow");
        if (!type) return;
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
            id: getId(),
            type,
            position,
            data: {label: `${type} node`},
        };

        setElements((es) => es.concat(newNode));
    };

    return (
            <div className="dndflow">
                <ReactFlowProvider>
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <ReactFlow
                            elements={elements}
                            nodeTypes={nodeTypes}
                            onConnect={onConnect}
                            arrowHeadColor={"#1e0a45"}
                            onElementsRemove={onElementsRemove}
                            onLoad={onLoad}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            onNodeDragStop={onNodeDragStop}
                            onEdgeUpdate={onEdgeUpdate}
                            onElementClick={onElementClick}
                            onMove={() => refreshSelected()}
                            deleteKeyCode={46} /* 'delete'-key */
                        >
                            <Controls/>
                        </ReactFlow>
                    </div>
                    <Sidebar
                        onUpdateName={onUpdateName}
                        selectedName={nodeName}
                        selected={selected}
                    />
                </ReactFlowProvider>
            </div>
    );
};

export default MainContainer;
