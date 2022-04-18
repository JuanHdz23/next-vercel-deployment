import { FC } from 'react';
import { PropsChildren } from '../interfaces/props';

export const DarkLayout: FC<PropsChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
