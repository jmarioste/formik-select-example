import CustomSelect from "components/CustomSelect";
import { NextPage } from "next";
import React, { useState } from "react";

const HomePage: NextPage = () => {
  const [val, setVal] = useState(0);
  return (
    <div className={"container"}>
      <div className="grid place-content-center min-h-screen">
        <div>
          <h1>Welcome to Formik Select Example</h1>
          <CustomSelect
            options={[
              {
                label: "$1000",
                value: 1000,
              },
              {
                label: "$2000",
                value: 2000,
              },
            ]}
            value={val}
            onChange={(value) => setVal(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
