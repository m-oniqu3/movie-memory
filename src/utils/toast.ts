import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

type ToastData = {
  message: string;
};

export const showToast = (data: ToastData) => {
  return Toastify({
    text: data.message,
    duration: 3000,
    destination: "./../pages/memories.html",
    gravity: "top",
    position: "right",
    stopOnFocus: true,

    style: {
      background: "#3b5249",
      color: "#dceddd",
      border: "1px solid #dceddd",
    },
    onClick: function () {
      window.location.pathname = "./../pages/memories.html";
    },
  }).showToast();
};
