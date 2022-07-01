import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SuccessToast = (text) => {
  toast.success(
    text,
    { theme: "dark", autoClose: 2000 }
  );
};
