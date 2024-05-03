"use client";

import { useEffect } from "react";
import { DrawIoEmbed, DrawIoEmbedRef } from "react-drawio";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as React from "react";

export default function DiagramViewer() {
  const [diagramXML, setDiagramXML] = React.useState<string | null>(null);
  const [imgData, setImgData] = React.useState<string | null>(null);

  useEffect(() => {
    fetch("/data/qblok.drawio.xml")
      .then((res) => res.text())
      .then((data) => setDiagramXML(data))
      .catch((err) => {
        console.log("errrrrrrrrrr", err);
      });
  }, []);

  const drawioRef = React.useRef<DrawIoEmbedRef>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const onLoad = () => {
    if (drawioRef.current) {
      drawioRef.current.exportDiagram({
        format: "xmlsvg",
        grid: true,
        scale: 1,
      });
    }
  };

  return (
    <div className="flex bg-gray-100 w-full overflow-hidden">
      <div className="hidden">
        {/* {diagramXML && (
          <DrawIoEmbed
            ref={drawioRef}
            urlParameters={{
              ui: "kennedy",
              spin: true,
              libraries: false,
              saveAndExit: false,
              noExitBtn: true,
              noSaveBtn: true,
              // lightbox: true,
            }}
            xml={diagramXML}
            onLoad={onLoad}
            onExport={(data) => {
              console.log("onexportttttttt", data);
              setImgData(data.data);
            }}
          />
        )} */}
      </div>
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        <TransformComponent
          wrapperClass="min-w-full"
          contentClass="min-w-full justify-center"
        >
          {/* <img src="image.jpg" alt="test" /> */}
          {/* {imgData && <img src={imgData} className="h-screen" />} */}
          <iframe
            className="diagrams-iframe"
            src={
              "https://viewer.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&page=1&layers=1&nav=1&title=#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fjgraph%2Fdrawio-diagrams%2Fdev%2Fexamples%2Fuml-activity-example.drawio"
            }
            ref={iframeRef}
            title="Diagrams.net"
            style={{
              minWidth: "100%",
              height: "100vh",
              border: "none",
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
