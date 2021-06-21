import { toast as showToast } from 'react-toastify';
const useNotification = () => {
  const showError = (errorMsg) => {
    showToast.error(errorMsg);
  };
  const showSuccess = (successMsg) => {
    showToast.success(successMsg);
  };
  return { showError, showSuccess };
};

export default useNotification;
