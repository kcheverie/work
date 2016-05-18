import React from 'react';

class MpHeader extends React.Component {
  render() {
    return (
      <div className="row-container mp-head">
        <div className="row-item">
          <div className="image-crop lib">
              <img src = "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlghabraOmar_Lib.jpg"/>
          </div>
        </div>
        <div className="row-item">
        <p className="mp-lead">
          <span className="underline lib">Omar Alghabra</span> is the&nbsp;
          <span className="underline lib">Liberal</span> MP for the riding of&nbsp;
          <span className="underline lib">Mississauga Centre</span>
        </p>
        </div>
      </div>
    )
  }
  
}

export default MpHeader;