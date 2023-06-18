import React from "react";
function Component(obj) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{obj.name}</h2>
        <img className="circle-img" src={obj.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{obj.phone}</p>
        <p className="info">{obj.email}</p>
      </div>
    </div>
  );
}

export default Component;
