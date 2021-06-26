import "./contact.scss";
import "./contact.scss";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validate = (values) => {
  let error = {};

  if (!values.name) {
    error.name = "Required";
  }
  if (!values.email) {
    error.email = "Required";
  } else if (
    !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      values.email
    )
  ) {
    error.email = "Invalid email format";
  }
  if (!values.message) {
    error.message = "Required";
  }
  return error;
};

const Contact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("form error", formik.error);

  return (
    <section className="contact" id="contact">
      <img src="images/ct.png" alt="" className="contact-bg" />
      <div className="contact-container">
        <div className="left">
          <div className="con-form">
            <h1>Contact</h1>
            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="form-control inputName"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="errorMsg">{formik.errors.name}</div>
              ) : null}
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control inputEmail"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorMsg">{formik.errors.email}</div>
              ) : null}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Please leave your message here"
                className="form-control inputMessage"
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="errorMsg">{formik.errors.message}</div>
              ) : null}
              <button type="submit" className="form-control inputSubmit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <img src="images/illus-co.png" alt="" className="con-img" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
