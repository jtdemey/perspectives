import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

const Container = styled(animated.section)`
  width: 100%;
  height: 100%;
`;

const BaseDiv = styled(animated.div)`
  position: absolute;
  width: 18rem;
  height: 100%;
  background: #4d0026;
  z-index: 4;
`;

const FirstDiv = styled(animated.div)`
  position: absolute;
  left: 10rem;
  width: 22rem;
  height: 200%;
  background: rgba(102, 0, 51, 1);
  z-index: 3;
`;

const SecondDiv = styled(animated.div)`
  position: absolute;
  top: -2rem;
  left: 20rem;
  width: 26rem;
  height: 200%;
  background: rgba(153, 0, 77, 1);
  z-index: 2;
`;

const ThirdDiv = styled(animated.div)`
  position: absolute;
  top: -8rem;
  left: 28rem;
  width: 30rem;
  height: 200%;
  background: rgba(204, 0, 102, 1);
  z-index: 1;
`;

const getDefaultSpring = () => ({ rotation: 0 });

const getStyle = spring => ({ transform: spring.rotation.interpolate(r => `rotate(${r}deg)`) });

const FormPetals = props => {
  const [baseSpring, setBase] = useSpring(() => ({ left: -200 }));
  setBase(props.visible ? ({ left: 0 }) : ({ left: -200 }));
  const [firstSpring, setFirst] = useSpring(getDefaultSpring);
  setFirst(props.visible ? ({ rotation: -12 }) : ({ rotation: 0 }));
  const [secondSpring, setSecond] = useSpring(getDefaultSpring);
  setSecond(props.visible ? ({ rotation: -24 }) : ({ rotation: 0 }));
  const [thirdSpring, setThird] = useSpring(getDefaultSpring);
  setThird(props.visible ? ({ rotation: -36 }) : ({ rotation: 0 }));
  return (
    <Container>
      <BaseDiv style={{ left: baseSpring.left.interpolate(l => `${l}px`) }} />
      <FirstDiv style={getStyle(firstSpring)} />
      <SecondDiv style={getStyle(secondSpring)} />
      <ThirdDiv style={getStyle(thirdSpring)} />
    </Container>
  );
};

export default FormPetals;