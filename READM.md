## contexts-wrapper

### ContextsWrapper Component

```

  import React, { createContext } from 'react';
  import { ContextsWrapper } from 'contexts-wrapper';

  const context = createContext({});
  const Provider = ({ children }) => <context.Provider value={{}}> </context.Provider>

  // Aways pass the Component that wrapps the context.Provider
  const ComponentWithContext = ({children}) => (
    <ContextsWrapper contexts={[ Provider ]}>{children}</ContextsWrapper>
  )

```

### withProviders Decorator

```

  import React, { createContext } from 'react';
  import { withProviders } from 'contexts-wrapper';

  const context = createContext({});
  const Provider = ({ children }) => <context.Provider value={{}}> </context.Provider>

  // Aways pass the Component that wrapps the context.Provider
  const Component = (props) => (
    <div>{props.message}</div>
  )

  const ComponentWithContext = withProviders([ Provider ])(props) => <Component { ...props } />

```