import React from 'react';
import { createRoot } from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App.js';

const lifecycles = singleSpaReact({
  React,
  ReactDOM: { render: (component, element) => createRoot(element).render(component) },
  rootComponent: App,
  domElementGetter: () => document.getElementById('card-designer-root'),
  errorBoundary: (err, info, props) => {
    return <h1>Something went wrong</h1>;   
  },
});

export const { bootstrap, mount, unmount } = lifecycles;