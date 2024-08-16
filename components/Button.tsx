'use client'
import React, { MouseEvent } from 'react';
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  function createRipple(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  if (onClick) {

    return <button onClick={(event) => {createRipple(event); onClick();}} className={className+" ripple-button"}>{children}</button>
  }

  return <button onClick={createRipple} className={className+" ripple-button"}>{children}</button>;
};

export default Button;
