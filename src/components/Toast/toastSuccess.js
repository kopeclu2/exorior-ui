import { toast } from 'react-toastify'

export const toastSuccess = (message) =>
  toast.success(message, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
