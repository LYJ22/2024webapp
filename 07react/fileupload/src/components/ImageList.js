import React from "react";

function ImageList({ imgData }) {
  return (
    <div>
      {imgData.length > 0 ? (
        imgData.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={`${process.env.REACT_APP_DEV_HOST}/file/${item.id}`}
                alt=""
              />
            </div>
          );
        })
      ) : (
        <p>no image</p>
      )}
    </div>
  );
}

export default ImageList;