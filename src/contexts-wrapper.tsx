import React, { ComponentType } from 'react';

const CONTEXT_KEY = '-context-wrapped';

export const ContextsWrapper: React.FC<{ contexts: ComponentType<any>[]}> = ({ contexts, children }) => {

  return contexts.reduce(
    (wrapped: JSX.Element | null, Current: any, index) => !index 
      ? (<Current key={`${index}${CONTEXT_KEY}`}>{children}</Current>)
      : (<Current key={`${index}${CONTEXT_KEY}`}>{wrapped}</Current>),
    null
  );

  // let wrappedContexts: JSX.Element | null = null;
  // contexts.forEach( (Ctx, index) => {
  //   if ( !index ) {
  //     wrappedContexts = (<Ctx key={`${index}${CONTEXT_KEY}`}>{children}</Ctx>);
  //     return;
  //   }
  //   wrappedContexts = (<Ctx key={`${index}${CONTEXT_KEY}`}>{wrappedContexts}</Ctx>);
  // });
  // return wrappedContexts;
}