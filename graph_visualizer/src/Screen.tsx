import React, { useEffect, useRef } from "react";
import { Stage, Layer, Circle, Arrow, Group, Text } from "react-konva";
import styled from "styled-components";

const OuterDiv = styled.div`
    margin-top: 15px;
    border-style: solid;
    border-color: black;
    border-radius: 10px;
    border-width: 0.5px;
    height: 500px;
    overflow: hidden;
`;

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

const Edge = ({ node1, node2, flag }: { node1: Node, node2: Node, flag : boolean }) => {
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
        pointerWidth={flag?0:5}
      />
    </Group>
  );
};

const Screen = ({ data, flag, canvasRef } : { data : string, flag : boolean, canvasRef : any }) => {
    const [nodes, updateNodes] = React.useState<Node[]>([]);
    const [edges, updateEdges] = React.useState<[number, number][]>([]);

    const vertex = parseInt(data.trim().split("\n")[0]);
    
    const outerDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(vertex === 0) return;
        let size = parseInt(data.split("\n")[0]);
        let ret = [];
        for(let i = 1; i <= size; i++) ret.push({
            ...VERTEX_DEFAULTS,
            x : Math.random() * (outerDiv.current?.clientWidth || 0),
            y : Math.random() * (outerDiv.current?.clientHeight || 0)
        });
        updateNodes(ret);
    }, [vertex]);

    useEffect(() => {
        let ret: [number, number][] = [];
        let lines = data.trim().split("\n");
        for(let i = 1; i < lines.length; i++) {
            let [a, b] = lines[i].split(" ").map(x => parseInt(x));
            if(a && b && 1 <= a && a <= vertex && 1 <= b && b <= vertex) ret.push([a, b]);
        }
        updateEdges(ret);
    }, [data]);

    return (
        <OuterDiv ref={outerDiv}>
            <Stage width={outerDiv.current?.clientWidth || 0} height={500} ref={canvasRef}>
                <Layer>
                    {
                        edges.map(([a, b]) => {
                            return (
                                <Edge node2={nodes[a - 1]} node1={nodes[b - 1]} flag={flag} />
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
        </OuterDiv>
    );
};

export default React.memo(Screen);