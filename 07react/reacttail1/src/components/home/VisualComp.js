import React from "react";

function VisualComp() {
  return (
    <>
      <div className="visual">
        <div className="container mx-auto h-auto md:h-80 px-4 py-10 flex text-white items-center  text-center md:text-left">
          <div>
            <h2 className="text-3xl mb-3">안녕하세요</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              vero dolor unde!{" "}
            </p>
            <div className="px-4 py-2 bg-blue-200 text-gray-900 inline-block rounded-md hover:bg-blue-400 hover:text-white">
              PRODUCT
            </div>
          </div>
        </div>
        ;
      </div>
    </>
  );
}

export default VisualComp;
