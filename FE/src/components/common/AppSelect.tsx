import React, {Dispatch, SetStateAction, useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../assets/icons/iconPath';
import {AppOption} from '../../constants/AppSelectOptions';
import {
  Option,
  Options,
  SelectView,
  Selected,
  Unselected,
  Wrapper,
} from './AppSelectStyle';

interface AppSelectProps {
  setData: Dispatch<SetStateAction<any>>;
  placeholder: string;
  options: AppOption<any>[];
  checkValid?: (params?: any) => boolean;
}

const AppSelect = ({
  setData,
  placeholder,
  options,
  checkValid,
}: AppSelectProps) => {
  const [selected, setSelected] = useState<JSX.Element | null>(null);

  // 드롭다운
  const [opened, setOpened] = useState(false);
  const handleOpen = () => {
    setOpened(!opened);
  };

  // 선택
  const select = (option: AppOption<any>) => {
    if (checkValid !== undefined) {
      if (!checkValid(option.data)) return;
    }
    setData(option.data);
    setSelected(option.node);
    setOpened(false);
  };

  return (
    <Wrapper>
      <SelectView onPress={handleOpen}>
        {selected ? (
          <Selected>{selected}</Selected>
        ) : (
          <Unselected>{placeholder}</Unselected>
        )}
        <WithLocalSvg
          width={25}
          height={25}
          rotation={opened ? 270 : 90}
          asset={iconPath.caret}
        />
      </SelectView>
      {opened ? (
        <Options>
          {options.map((option, idx) => (
            <Option key={idx} onPress={() => select(option)}>
              {option.node}
            </Option>
          ))}
        </Options>
      ) : null}
    </Wrapper>
  );
};

export default AppSelect;
