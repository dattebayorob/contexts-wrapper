import React from 'react';

const contextValue = () => ({ context: 1 });

const context1 = React.createContext(contextValue());
const context2 = React.createContext(contextValue());
const context3  = React.createContext(contextValue());

export const Context1Provider: React.FC = ({ children }) => <context1.Provider value={contextValue()}>{children}</context1.Provider>
export const Context2Provider: React.FC = ({ children }) => <context2.Provider value={contextValue()}>{children}</context2.Provider>
export const Context3Provider: React.FC = ({ children }) => <context3.Provider value={contextValue()}>{children}</context3.Provider>

export const IT_WORKED = 'It Worked!';

export const ComponentWrapped = () => (
  <context1.Consumer>
    {
      ({ context: ctx1 }) =>
        <context2.Consumer>
          {
            ({ context: ctx2}) => 
              <context3.Consumer>
                {
                  ({ context: ctx3 }) => 
                    <p id='mocked'>{`${IT_WORKED}${ctx1+ctx2+ctx3}`}</p>
                }
              </context3.Consumer>
          }
        </context2.Consumer>
    }
  </context1.Consumer>
)