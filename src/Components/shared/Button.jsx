


import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="button">
        {children}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    padding: 7px 13px;
    font-size: 18px;
    color: rgb(0,0,0);
    border: 2px solid rgb(19, 189, 0);
    // border-radius: 34px;
    background-color: transparent;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: rgb(19, 189, 0);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .button:hover::before {
    scale: 3;
  }

  .button:hover {
    color: #fdfffd;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(12, 192, 0,0.4);
    
  }

  .button:active {
    scale: 1;
  }`;

export default Button;
