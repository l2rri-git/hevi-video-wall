import React from 'react';
import { createRoot } from 'react-dom/client';
import Prototype, { DEFAULT_PROPS } from './Prototype.jsx';
import './styles.css';

// Layout B by default; ?layout=a shows the alternative arrangement.
const params = new URLSearchParams(window.location.search);
const layout = params.get('layout') === 'a' ? 'a' : 'b';
const labelScale = Number(params.get('labelScale')) || DEFAULT_PROPS.labelScale;
// /wall shows only the wall and follows the desk open in another tab.
const screen = /\/wall\/?$/.test(window.location.pathname) ? 'wall' : 'desk';
document.title = screen === 'wall' ? 'Hevi wall' : 'Hevi desk' + (layout === 'a' ? ' · layout A' : '');

createRoot(document.getElementById('root')).render(<Prototype layout={layout} labelScale={labelScale} screen={screen} />);
