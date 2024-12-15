import React from 'react'
import cube from "../../../assets/icons/cube.svg";
import download from "../../../assets/icons/document-download.svg";
export default function DownloadDetails() {
  return (
      <div className="download-details wrap row gap-30 s-between">
          <div className="row center-y gap-15">
              <div className="icon center-gr">
                  <img src={cube} alt="cube" />
              </div>
              <span className="xsmall-text text-main text-black">
                  Посмотреть 3D-модель
              </span>
          </div>
          <div className="row center-y gap-15">
              <div className="icon center-gr">
                  <img src={download} alt="download" />
              </div>
              <span className="xsmall-text text-main text-black">
                  Скачать 3D-модель
              </span>
          </div>
      </div>
  )
}
