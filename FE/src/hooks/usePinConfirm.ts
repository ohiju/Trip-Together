interface usePinConfirmationResult {
  validation: string;
  isOk: boolean;
  message: string;
}

const usePinConfirmation = () => {
  const pinConfirmation = (
    target: string,
    validation: string,
  ): usePinConfirmationResult => {
    let result = {
      validation,
      isOk: false,
      message: '',
    };
    // 숫자가 아닌 값이 들어왔을 경우
    if (isNaN(parseInt(validation, 10)) && validation.length) {
      result.validation = '';
      result.message = '잘못된 입력 형식입니다';
      return result;
    }

    // 길이가 6이 아닌경우
    if (target !== validation) {
      result.message = '입력한 숫자와 일치하지 않습니다.';
      return result;
    }

    result.isOk = true;

    return result;
  };

  return pinConfirmation;
};

export default usePinConfirmation;
