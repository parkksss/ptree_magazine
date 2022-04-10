import React from "react";
import styled from "styled-components";

const Grid = (props) => {
	// props로 설정해준 값 가지고 오기
  const { is_flex, width, margin, padding, bg, children } = props;   

  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
  };
  return (
    <React.Fragment>
      {/* GridBox는 바깥을 감싸는애 -> 안에 들어오는 것을 children 속성으로 넘겨받아야 함 */}
      {/* props 중 style 담당만 속성으로 넣어주기  */}
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

// 스타일 잡아주기
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
	// 없을땐, 아예 안나오게
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
`;

export default Grid;