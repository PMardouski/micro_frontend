import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class SafeComponent extends Component<Props, State> {

  public state: State = {
    hasError: false
  };

  // public constructor(props: Props) {
  //   super(props);
  //   this.state = { hasError: false };
  // }

  // static getDerivedStateFromError(error: Error) {
  //   return { hasError: true, error };
  // }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // console.error(error, errorInfo);
  }

  // public render() {
  //   if (this.state.hasError) {
  //     return <h1>Something went wrong.</h1>;
  //   }

  //   return this.props.children;
  // }

  public render(): ReactNode {

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default SafeComponent;
