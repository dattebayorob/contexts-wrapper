import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ContextsWrapper } from './contexts-wrapper';
import {
  Context1Provider,
  Context2Provider,
  Context3Provider,
  ComponentWrapped,
  IT_WORKED
} from './helpers';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && document.body.removeChild(container);
  container = null;
});
describe('contexts-wrapper', () => {
  it('should provide all contexts', () => {
    act(() => {
      ReactDom.render(
        <ContextsWrapper contexts={[ Context1Provider, Context2Provider, Context3Provider]}>
          <ComponentWrapped />
        </ContextsWrapper>,
        container
      )
    });
    const expected = container?.querySelector('p#mocked')?.textContent;
    expect(expected).toBe(IT_WORKED+3);
  });
})