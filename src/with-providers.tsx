import React, { ComponentType } from "react";
import { ContextsWrapper } from "./contexts-wrapper";

export const withProviders = (providers: ComponentType<any>[]) => <T extends object>(WrappedComponent: ComponentType<T>) => (
  (props: T) => (
    <ContextsWrapper contexts={providers}><WrappedComponent { ...props }/></ContextsWrapper>
  )
)