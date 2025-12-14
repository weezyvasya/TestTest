import type { FC, ReactNode } from "react";
import './ButtonUI.css'


type ButtonProps = {
    handle?: () => void,
    children: ReactNode,

}


const ButtonUI: FC<ButtonProps> = ({handle, children}) =>  {
    return (
        <button onClick={handle} className="button-UI">{children}</button>
      );
}

export default ButtonUI;