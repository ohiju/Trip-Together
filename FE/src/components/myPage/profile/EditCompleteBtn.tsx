import React from 'react';
import usePutMember from '../../../apis/member/usePutMember';
import useS3Upload from '../../../apis/s3/uploadImg';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {BtnText, Wrapper} from './EditCompleteBtnStyle';

const EditCompleteBtn = () => {
  const s3Upload = useS3Upload();
  const putMember = usePutMember();
  const {imgConfig, nickname, description} = useAppSelector(
    (state: RootState) => state.user.putData,
  );

  const onPress = () => {
    if (imgConfig) {
      s3Upload?.();
    } else {
      putMember({nickname, description});
    }
  };

  return (
    <Wrapper onPress={onPress}>
      <BtnText>완료</BtnText>
    </Wrapper>
  );
};

export default EditCompleteBtn;
