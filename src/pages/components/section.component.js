import React from "react";

function Section({ children, title }) {
  return (
    <section className="  my-4 py-2">
      <div className="w-10/12 mx-auto ">
        <h3 className="text-xl pb-2">{title}</h3>
        {children}
      </div>
    </section>
  );
}

export default Section;
