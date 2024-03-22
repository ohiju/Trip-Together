import React, {Dispatch, SetStateAction} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {term} from '../../../constants/terms';
import AppCheckbox from '../../common/AppCheckbox';
import {TermLeftView, TermText, TermView, Wrapper} from './TermStyle';

interface TermProps {
  check: term;
  setCheck: Dispatch<SetStateAction<term>>;
}

const Term = ({check, setCheck}: TermProps) => {
  const handleCheck = () => {
    setCheck(prev => ({...prev, isChecked: !check.isChecked}));
  };

  return (
    <Wrapper>
      <TermView>
        <TermLeftView>
          <AppCheckbox isChecked={check.isChecked} onPress={handleCheck} />
          <TermText>{check.title}</TermText>
        </TermLeftView>
        <WithLocalSvg width={24} height={24} asset={iconPath.caret} />
      </TermView>
    </Wrapper>
  );
};

export default Term;
