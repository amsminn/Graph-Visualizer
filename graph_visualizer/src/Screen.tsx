import React, { useEffect } from "react";
import { Stage, Layer, Circle, Arrow, Group, Text } from "react-konva";

interface Node {
    x: number;
    y: number;
    fill: string;
    stroke: string;
    width: number;
    height: number;
    draggable: boolean;
}

const VERTEX_DEFAULTS: Node = { 
  x: 100,
  y: 100,
  fill: "white",
  stroke: "black",
  width: 40,
  height: 40,
  draggable: true
};

const Edge = ({ node1, node2 }: { node1: Node, node2: Node }) => {
  const dx = node1.x - node2.x;
  const dy = node1.y - node2.y;
  let angle = Math.atan2(-dy, dx);

  const radius = 20;

  const arrowStart = {
    x: node2.x + -radius * Math.cos(angle + Math.PI),
    y: node2.y + radius * Math.sin(angle + Math.PI)
  };

  const arrowEnd = {
    x: node1.x + -radius * Math.cos(angle),
    y: node1.y + radius * Math.sin(angle)
  };

  const arrowMiddle = {
    x: (arrowStart.x + arrowEnd.x) / 2,
    y: (arrowStart.y + arrowEnd.y) / 2
  };

  return (
    <Group>
      <Arrow
        points={[
          arrowStart.x,
          arrowStart.y,
          arrowMiddle.x,
          arrowMiddle.y,
          arrowEnd.x,
          arrowEnd.y
        ]}
        stroke="#000"
        fill="#000"
        strokeWidth={2}
        pointerWidth={5}
      />
    </Group>
  );
};

const Screen = ({ data } : { data : string }) => {
    const [nodes, updateNodes] = React.useState<Node[]>([]);
    const [edges, updateEdges] = React.useState<[number, number][]>([]);

    const vertex = parseInt(data.trim().split("\n")[0]);

    useEffect(() => {
        let size = parseInt(data.split("\n")[0]);
        let ret = [];
        for(let i = 1; i <= size; i++) ret.push(VERTEX_DEFAULTS);
        updateNodes(ret);
    }, [vertex]);

    useEffect(() => {
        let ret: [number, number][] = [];
        let lines = data.trim().split("\n");
        for(let i = 1; i < lines.length; i++) {
            let [a, b] = lines[i].split(" ").map(x => parseInt(x));
            if(a && b) ret.push([a, b]);
        }
        updateEdges(ret);
    }, [data]);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            {
                edges.map(([a, b]) => {
                    return (
                        <Edge node1={nodes[a - 1]} node2={nodes[b - 1]}/>
                    );
                })
            }
            { 
                nodes.map((node: Node, index:number) => {
                    return (
                        <>
                            <Circle
                                {...node}
                                onDragMove = {e => {
                                    const i = nodes.indexOf(node);
                                    const newNodes = [...nodes];
                                    newNodes[i] = { ...nodes[i], ...e.target.position() };
                                    updateNodes(newNodes);
                                }}
                            />
                            <Text text={(index + 1).toString()} x={node.x - 3} y={node.y - 5} 
                            />
                        </>
                    );
                })
            }
        </Layer>
        </Stage>
    );
};

export default React.memo(Screen);