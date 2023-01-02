import FormikSelect from "components/FormikSelect";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import React from "react";
const HomePage: NextPage = () => {
  return (
    <div className={"container"}>
      <div className="grid place-content-center min-h-screen">
        <div>
          <h1>Welcome to Formik Select Example</h1>
          <Formik
            onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
            initialValues={{
              salary: 0,
            }}
          >
            <Form className="flex flex-col gap-2">
              <FormikSelect
                name="salary"
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
              />
              <button className="btn" type="submit">
                Submit Form
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
