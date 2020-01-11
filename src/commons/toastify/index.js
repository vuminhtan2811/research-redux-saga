import { toast } from "react-toastify"

export const showToast = (type, message) => {
  if (message !== null && message !== "undefined" && message !== "") {
    switch (type) {
      case "success":
        toast.success(message)
        break
      case "error":
        toast.error(message)
        break
      case "warning":
        toast.warn(message)
        break

      default:
        break
    }
  }
}
