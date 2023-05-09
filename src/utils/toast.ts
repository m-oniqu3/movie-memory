import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = () => {
  return Toastify({
    text: "Added to Memories",
    duration: 3000,
    destination: "/memories.html",
    gravity: "top",
    position: "right",
    stopOnFocus: true,

    style: {
      background: "#3b5249",
      color: "#dceddd",
      border: "1px solid #dceddd",
    },
    onClick: function () {
      window.location.href = "/memories.html";
    },
  }).showToast();
};
