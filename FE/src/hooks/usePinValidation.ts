interface usePinValidationResult {
  pin: string;
  isOk: boolean;
  message: string;
}

const usePinValidation = () => {
  const pinValidation = (target: string): usePinValidationResult => {
    let result = {
      pin: target,
      isOk: false,
      message: '',
    };
    // 숫자가 아닌 값이 들어왔을 경우
    if (isNaN(parseInt(target, 10)) && target.length) {
      result.pin = '';
      result.message = '잘못된 입력 형식입니다';
      return result;
    }

    // 길이가 6이 아닌경우
    if (target.length !== 6) {
      result.message = '';
      return result;
    }

    // 연속된 3자리 숫자를 확인
    for (let i = 0; i < target.length - 2; i++) {
      if (target[i] === target[i + 1] && target[i] === target[i + 2]) {
        result.message = '연속된 3자리 숫자는 사용할 수 없습니다';
        return result;
      }
    }

    // 앞뒤 3자리가 같은 숫자인지 확인
    if (target.slice(0, 3) === target.slice(3, 6)) {
      result.message = '반복되는 숫자는 사용할 수 없습니다';
      return result;
    }

    // 단순한 배열 확인
    const simplePatterns = ['012345', '123456', '234567', '345678', '456789'];
    if (simplePatterns.includes(target)) {
      result.message = '숫자가 너무 단순합니다.';
      return result;
    }

    result.isOk = true;

    return result;
  };

  return pinValidation;
};

export default usePinValidation;
