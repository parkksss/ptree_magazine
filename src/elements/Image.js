import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <React.Fragment>
                <ImageCircle {...styles}></ImageCircle>
            </React.Fragment>
        )
    }

    if(shape === "rectangle"){
        return (
            <React.Fragment>
                <AspectOutter>
                    <AspectInner {...styles}></AspectInner>
                </AspectOutter> 
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://user-images.githubusercontent.com/91959791/162609551-bfa94b6e-3edb-4dfb-869c-e27326132c12.png",
  size: 36,
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    // 4:3 비율 맞추기
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    margin: 4px 10px;
`;

export default Image;