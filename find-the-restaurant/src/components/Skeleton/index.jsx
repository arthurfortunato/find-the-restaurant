import styled, { keyframes } from "styled-components";

const keyFrameLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom; 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${keyFrameLoading} 500ms infinite alternate;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
