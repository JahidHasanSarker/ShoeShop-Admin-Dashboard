import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe title="This is my Products Charts"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-mernstack-zveav/embed/charts?id=62493370-700e-4352-880f-25e48b8b4149&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
          
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
