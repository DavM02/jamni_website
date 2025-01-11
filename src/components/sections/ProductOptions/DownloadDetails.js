import React from 'react'
import cube from "../../../assets/icons/cube.svg";
import model from '../../../assets/icons/3d-modeling.svg'
import download from "../../../assets/icons/document-download.svg";
export default function DownloadDetails({ catalog }) {
    const construct = catalog !== 'decor'  
  return (
      <div className="download-details wrap row gap-30 s-between">
          {construct && <div className="row center-y gap-15">
              <div className="icon center-gr">
                  <img src={cube} alt="cube" />
              </div>
              <span className="xsmall-text text-main text-black-secondary">
                  Собрать <br /> самому
              </span>
          </div>}
          <div className="row center-y gap-15">
              <div className="icon center-gr">
                  <img src={model} alt="model" />
              </div>
              <span className="xsmall-text text-main text-black-secondary">
                  Посмотреть {construct && <br />} 3D-модель
              </span>
          </div>
          
          <div className="row center-y gap-15">
              <div className="icon center-gr">
                  <img src={download} alt="download" />
              </div>
              <span className="xsmall-text text-main text-black-secondary">
                  Скачать {construct && <br />} 3D-модель
              </span>
          </div>
      </div>
  )
}
