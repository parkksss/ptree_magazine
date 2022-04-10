import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from './elements';

const Input = (props) => {
  const {label, placeholder, _onChange} = props;
  return (
    <React.Fragment>
        <Grid>
            <Text margin='0'>{label}</Text>
            <ElInput placeholder={placeholder} onChange={_onChange}/>
        </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: '텍스트',
  placeholder: '텍스트를 입력해주세요.',
  _onChange: () => {} // 변하는 텍스트 값을 부모컴포넌트가 사용할것 : 콜백함수 받아와야함!
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: 1px solid blue;
  }
`;

export default Input;