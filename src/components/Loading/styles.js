import styled from 'styled-components';

export const CenterLoading = styled.div`
  position: absolute;
  height: 178%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .divMain {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 50px;
      height: 50px;
      background: orange;
      border-radius: 50%;
      margin-left: 15px;
    }
  }
`;
