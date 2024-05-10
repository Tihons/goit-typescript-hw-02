import css from "./ErrorMessage.module.css";



const ErrorMessage = ({ })  => {
  return (
    <div>
    <p className={css.errorMessageBox}>
    please reload the page!
    </p>
  </div>
  );
};

export default ErrorMessage;