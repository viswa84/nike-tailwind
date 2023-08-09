import React from "react";
import Title from "./utils/Title";
import Item from "./utils/item";

const Sales = ({ ifexists, endpoint: { title, items } }) => {
  console.log(items, "items");
  return (
    <div>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center
          gap-7 lg:gap-5 mt-7${ifexists ? " grid-cols-3 xl:grid-cols-2 sm:grid-cols-1" : " grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"} `}
        >
          {items.map((item, i) => (
            <Item {...item} key={i} ifexists={ifexists} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
