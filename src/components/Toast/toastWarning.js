import { toast } from 'react-toastify'

export const toastWarning = (message) =>
  toast.warn(message, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
