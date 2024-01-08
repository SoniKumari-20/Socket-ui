import { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";
import "./Style/FormDemo.css";
import { loginUser } from "../api/functions";
import { parseCookies, createCookie } from "../utils/cookies";

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }

    return errors;
  };

  const onSubmit = async (data, form) => {
    setFormData(data);
    setShowMessage(true);
    console.log(data);
    try {
      const res = await loginUser({ ...formData });
      if (res.headers.has("set-cookie")) {
        const cookies = res.headers.get("set-cookie");
        const parsedCookies = parseCookies(cookies);
        createCookie({
          name: "socketAppToken",
          value: parsedCookies["parsedCookies"],
          expires: "20m",
        });
        createCookie({
          name: "socketAppRefreshToken",
          value: parsedCookies["socketAppRefreshToken"],
          expires: "90d",
        });
      }
      form.restart();
    } catch (err) {
      console.log(err);
    }
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
  };

  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Login</h5>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              name: "",
              email: "",
              password: "",
              accept: false,
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="name"
                          {...input}
                          autoFocus
                          className={classNames({ "p-invalid": isFormFieldValid(meta) })}
                        />
                        <label
                          htmlFor="name"
                          className={classNames({ "p-error": isFormFieldValid(meta) })}
                        >
                          Name*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          {...input}
                          className={classNames({ "p-invalid": isFormFieldValid(meta) })}
                        />
                        <label
                          htmlFor="email"
                          className={classNames({ "p-error": isFormFieldValid(meta) })}
                        >
                          Email*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Password
                          id="password"
                          {...input}
                          toggleMask
                          className={classNames({ "p-invalid": isFormFieldValid(meta) })}
                        />
                        <label
                          htmlFor="password"
                          className={classNames({ "p-error": isFormFieldValid(meta) })}
                        >
                          Password*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />

                <Field
                  name="accept"
                  type="checkbox"
                  render={({ input, meta }) => (
                    <div className="field-checkbox">
                      <Checkbox
                        inputId="accept"
                        {...input}
                        className={classNames({ "p-invalid": isFormFieldValid(meta) })}
                      />
                      <label
                        htmlFor="accept"
                        className={classNames({ "p-error": isFormFieldValid(meta) })}
                      >
                        I agree to the terms and conditions*
                      </label>
                    </div>
                  )}
                />

                <Button type="submit" label="Submit" className="mt-2" />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
