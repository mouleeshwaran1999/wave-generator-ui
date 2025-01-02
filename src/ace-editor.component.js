import React, { useEffect, useRef, useState } from "react";
import AceEditor from "react-ace";
import "./ace.styles.scss";
import "ace-builds/src-noconflict/mode-verilog";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import useAceEditorHook from "./custom-hook/ace-editor.hook";
import WavedromComponent from "./wavedrom.component";

const AceEditorComponent = () => {
  const { codeData, apiHandler, onChangeHandler, errorMessage, waveformData } =
    useAceEditorHook();
  console.log("errorMessage", errorMessage);

  return (
    <>
      <div className="ace-container">
        <div className="ace-container-codeeditor">
          <AceEditor
            mode="verilog"
            theme="github"
            onChange={onChangeHandler}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="ace-container-output">
          {errorMessage ? (
            errorMessage
          ) : (
            <>
              {Object.keys(waveformData).length ? (
                <WavedromComponent waveformData={waveformData} />
              ) : null}
            </>
          )}
        </div>
      </div>
      <button className="execute" onClick={apiHandler}>
        Execute
      </button>
    </>
  );
};
export default AceEditorComponent;
