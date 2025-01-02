import React, { useEffect } from "react";

const WavedromComponent = ({ waveformData = {} }) => {
  useEffect(() => {
    const waveformDiv = document.getElementById("waveform0");
    if (!waveformDiv) {
      return;
    }
    if (typeof WaveDrom !== "undefined") {
      window.WaveDrom.RenderWaveForm(0, waveformData, "waveform");
    } else {
      console.log("waveDrom is not defined ");
    }
  }, []);

  return (
    <div>
      <div id="waveform0"></div>
    </div>
  );
};
export default WavedromComponent;
