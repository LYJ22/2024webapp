import React from "react";

function pagerComp({ serverData, movePage }) {
  return (
    <div className="flex gap-2 justify-center">
      {serverData.prev ? (
        <div
          className="p-1"
          onClick={() => {
            movePage({ page: serverData.prevPage });
          }}
        >
          prev
        </div>
      ) : null}

      {serverData.pageNumList.map((item, i) => {
        return (
          <div
            key={i}
            className={`p-2 w-12 text-center rounded-md ${
              serverData.current === item ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => {
              movePage({ page: item });
            }}
          >
            {item}
          </div>
        );
      })}

      {serverData.next ? (
        <div
          className="p-1"
          onClick={() => {
            movePage({ page: serverData.nextPage });
          }}
        >
          next
        </div>
      ) : null}
    </div>
  );
}

export default pagerComp;
