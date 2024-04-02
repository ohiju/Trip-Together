import React, {useState} from 'react';
import {
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {imagePath} from '../../../assets/images/imagePath';
import parseProfile from '../../../hooks/parseProfile';
import {member as memberType} from '../../../interfaces/states/UserState';
import {useAppDispatch} from '../../../store/hooks';
import {setPutData} from '../../../store/slices/user';
import {
  CameraIcon,
  Image,
  ImageBtn,
  ImageView,
  Input,
  InputBox,
  InputTitle,
  InputView,
  Wrapper,
} from './EditorStyle';

interface EditorProps {
  member: memberType;
}

const Editor = ({member}: EditorProps) => {
  const {image_url, description, nickname} = parseProfile(member);
  const dispatch = useAppDispatch();

  // 입력
  const [imgConfig, setImgConfig] = useState<ImageSourcePropType>(image_url);
  const [nicknameInput, setNicknameInput] = useState('');
  const [descriptInput, setDiscriptInput] = useState('');
  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, async (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('사용자가 이미지 선택을 취소했습니다.');
      } else if (
        response.errorCode === 'camera_unavailable' ||
        response.errorCode === 'permission' ||
        response.errorCode === 'others'
      ) {
        console.log('ImagePicker 에러: ', response.errorMessage);
      } else if (response.assets && response.assets[0]) {
        setImgConfig(response.assets[0]);
        dispatch(setPutData({imgConfig: response.assets[0]}));
      }
    });
  };
  const handleNickname = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setNicknameInput(e.nativeEvent.text);
    dispatch(setPutData({nickname: e.nativeEvent.text}));
  };
  const handleDescript = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setDiscriptInput(e.nativeEvent.text);
    dispatch(setPutData({description: e.nativeEvent.text}));
  };

  return (
    <Wrapper>
      <ImageView>
        <ImageBtn onPress={selectImage}>
          <Image source={imgConfig} resizeMode="cover" />
          <CameraIcon source={imagePath.camera} resizeMode="cover" />
        </ImageBtn>
      </ImageView>
      <InputBox>
        <InputTitle>닉네임</InputTitle>
        <InputView>
          <Input
            value={nicknameInput}
            onChange={handleNickname}
            placeholder={nickname}
          />
          <WithLocalSvg width={20} height={20} asset={iconPath.pen} />
        </InputView>
      </InputBox>
      <InputBox>
        <InputTitle>내 소개</InputTitle>
        <InputView>
          <Input
            value={descriptInput}
            onChange={handleDescript}
            placeholder={description}
          />
          <WithLocalSvg width={20} height={20} asset={iconPath.pen} />
        </InputView>
      </InputBox>
    </Wrapper>
  );
};

export default Editor;
