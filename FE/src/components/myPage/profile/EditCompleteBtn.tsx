import React from 'react';
import usePutMember, {PutMemberData} from '../../../apis/member/usePutMember';
import useS3Upload from '../../../apis/s3/uploadImg';
import {ProfileMainProps} from '../../../interfaces/router/myPage/ProfileStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {BtnText, Wrapper} from './EditCompleteBtnStyle';

const EditCompleteBtn = () => {
  const s3Upload = useS3Upload();
  const putMember = usePutMember();
  const member = useAppSelector((state: RootState) => state.user.member);
  const imgConfig = useAppSelector(
    (state: RootState) => state.user.putData.imgConfig,
  );
  const nickname = useAppSelector(
    (state: RootState) => state.user.putData.nickname,
  );
  const description = useAppSelector(
    (state: RootState) => state.user.putData.description,
  );

  const submit = () => {
    if (imgConfig) {
      s3Upload?.();
    } else {
      const data: PutMemberData = {
        image_url: member.image_url,
        nickname: nickname ? nickname : member.nickname,
        description: description ? description : member.description,
      };
      const props: ProfileMainProps = {
        member_id: member.member_id,
      };
      putMember(data, props);
    }
  };

  return (
    <Wrapper onPress={submit}>
      <BtnText>완료</BtnText>
    </Wrapper>
  );
};

export default EditCompleteBtn;
