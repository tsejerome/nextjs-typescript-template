import Colours from './Colours';
import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';
import Icon, { IconType } from './Icon';

export const H1 = styled.h1`
  font-family: CircularStd-Black;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 46px;
`;

export const H2 = styled.h2`
  font-family: CircularStd-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: ${Colours.DarkGrey};
`;
export const P1 = styled.div`
  font-family: CircularStd-Book;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: ${Colours.DarkGrey};
`;
export const P2 = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${Colours.MediumGrey};
`;
export const H3 = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${Colours.DarkGrey};
`;
export const Input = styled.input`
  height: 50px;
  width: 400px;
  background: ${Colours.White};
  border: 2px solid ${Colours.OffWhite};
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 17px;
  padding: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Header = styled.h1`
  font-family: CircularStd-Black;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    line-height: 1;
  }
`;
export const SubHeader = styled.h2`
  color: '#000';
  margin-top: 15px;
  font-size: 17px;
  margin-bottom: 25px;
`;

export enum ButtonVariant {
  'blue' = 'blue',
  'blue__inverted' = 'blue__inverted',
  'yellow' = 'yellow'
}

export const JPNativeButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 60px;
  border-radius: 100px;
  font-size: 20px;
  width: 300px;
  cursor: pointer;
  font-family: CircularStd-Bold;
  &:hover {
    transform: scale(1.05);
    color: ${props => props.textColor};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  color: ${props => props.textColor};
  background: ${props => props.backgroundColor};
  border: 2px solid ${props => props.borderColor};
  
  ${(props) =>
    props.unclickable &&
    css`
      &:hover {
        transform: scale(1);
        cursor: default;
      }
    `}
  
  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: none;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: ${Colours.LightGrey};
      border-color: ${Colours.LightGrey};
      color: white;
      &:hover {
        color: white;
        transform: scale(1);
        cursor: default;
      }
    `}
`;

interface JPButtonProps {
  text: string;
  isLoading?: boolean;
  variant?: ButtonVariant; // transparent rounded button
  style?: React.CSSProperties;
  disabled?: boolean;
  unclickable?: boolean;
  onClick?: () => void;
  icon?: IconType
}

export const Button = (props: JPButtonProps) => {
  const { text, isLoading, icon, variant = ButtonVariant.blue } = props;

  let [textColor, setTextColor] = useState(Colours.White);
  let [backgroundColor, setBackgroundColor] = useState(Colours.MainBlue);
  let [borderColor, setBorderColor] = useState(Colours.MainBlue);
  const setVariantStyle = () => {
    if (variant === ButtonVariant.yellow) {
      setTextColor(Colours.White);
      setBackgroundColor(Colours.BrightYellow)
      setBorderColor(Colours.BrightYellow);
    }
    if (variant === ButtonVariant.blue__inverted) {
      setTextColor(Colours.MainBlue);
      setBackgroundColor(Colours.White)
      setBorderColor(Colours.MainBlue);
    }
    if (variant === ButtonVariant.blue) {
      setTextColor(Colours.White);
      setBackgroundColor(Colours.MainBlue)
      setBorderColor(Colours.MainBlue);
    }
  }

  useEffect(() => { setVariantStyle() }, [])

  return (
    <JPNativeButton
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      style={{
        pointerEvents: isLoading ? 'none' : 'all',
      }}
      {...props}
    >
      {text}
      {icon ?
        <div style={{ display: 'flex', marginLeft: 12 }}>
          <Icon
            type={icon}
            size={18}
            color={textColor}
          />
        </div>
        : null
      }
      {
        isLoading ? (
          <Icon
            style={{
              position: 'absolute',
              right: 30,
            }}
            type={IconType.Loading}
            color={Colours.White}
            size={30}
          />
        ) : null}
    </JPNativeButton>
  );
};

const Image = styled.img`
  height: 145px;
  width: 145px;
  border-radius: 72.5px;
  border: 5px solid ${Colours.BrightYellow};
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

//input and button container
export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 400px;
  padding-left: 12px;
  padding-right: 12px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: unset;
    width: 90%;
  }
`;
