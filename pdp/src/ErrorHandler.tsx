import React, { useState, ErrorInfo, ReactNode, Component } from "react";

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorHandler extends Component<IProps, IState> {

  // const [state, setState] = useState<IState>({hasError: false});
  /**
   * constructor
   */
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  public static getDerivedStateFromError(error: Error): IState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {

    // const [hasError, setHasError] = useState<IState>('');
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorHandler;
