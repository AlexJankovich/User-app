import styled from 'styled-components';

export const Div = styled.div`
  width: 80vw;
  margin: 10vh auto;
  @media screen and (max-width: 940px) {
    width: 95vw;
  }
`;

export const Wrapper = styled.div`
  padding: 1px;
  margin: 20px 0;
  box-shadow: 0 0 5px grey;
  background-color: #cbcbfc;
`;

export const Container = styled.div`
  padding: 10px;
  margin: 20px;
  box-shadow: 0 0 5px grey;
  background-color: gainsboro;

  h1 {
    box-shadow: 0px 0px 5px gray;
    padding: 15px 30px;
    margin: 10px;
    background-color: whitesmoke;
  }
`;


export const Category = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid grey;
  font-size: 1.7rem;
`;


export const ImgContainer = styled.div`
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 5px grey;
  background-color: whitesmoke;
  text-align: center;

  img {
    width: 100%;
    max-width: 700px;
  }
`;

export const Currentitem = styled.div`
  display: inline-block;
  font-weight: bold;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
  margin: 0 5px;
  font-size: 1.5rem;
  background: whitesmoke;
`;

export const SomeItem = styled.div`
  display: inline-block;
  padding: 5px;
  font-size: 1.2rem;
`;

export const SimpleWrapper = styled.div`
  display: inline-block;
  padding: 5px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 0 5px;
  border: 1px solid grey;
  outline: none;
  font-size: 1rem;
  background: whitesmoke;
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: 5px;
  background: whitesmoke;
`;

export const Loading = styled.div`
  position: absolute;
  top: 25vh;
  left: calc(100vw / 2 - 50vh / 2);

  img {
    height: 50vh;
  }
`;