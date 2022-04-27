import { ImSpinner6 } from "react-icons/im";

const LoadingOverlay = () => {
  return (
    <div className="modal__overlay modal__overlay--loading">
      <ImSpinner6 className="spinner" />
    </div>
  );
};

export default LoadingOverlay;
