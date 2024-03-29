import React from 'react';
import usePutMember, {PutMemberData} from '../../../apis/member/usePutMember';
import useS3Upload from '../../../apis/s3/uploadImg';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {BtnText, Wrapper} from './EditCompleteBtnStyle';

const EditCompleteBtn = () => {
  const s3Upload = useS3Upload();
  const putMember = usePutMember();
  const member = useAppSelector((state: RootState) => state.user.member);
  const {imgConfig, nickname, description} = useAppSelector(
    (state: RootState) => state.user.putData,
  );

  const onPress = () => {
    if (imgConfig) {
      s3Upload?.();
    } else {
      const data: PutMemberData = {
        image_url: member.image_url,
        nickname: nickname ? nickname : member.nickname,
        description: description ? description : member.description,
      };
      putMember(data);
    }
  };

  return (
    <Wrapper onPress={onPress}>
      <BtnText>완료</BtnText>
    </Wrapper>
  );
};

export default EditCompleteBtn;
