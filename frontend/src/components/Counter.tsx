import React, { useState, useEffect } from "react";

type Props = {
  init: number;
  max: number;
};

type State = {
  count: number;
};

export class CounterClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: props.init };
  }

  // componentDidUpdate() {
  //   console.log("count from class", this.state.count);
  //   if (this.state.count === this.props.max) {
  //     this.setState({ count: this.props.init });
  //   }
  // }

  render() {
    return (
      <div>
        Count {this.state.count}
        <button
          onClick={() =>
            this.setState({
              count:
                this.state.count === this.props.max
                  ? this.props.init
                  : this.state.count + 1,
            })
          }
        >
          +
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    );
  }
}

export function CounterHook(props: Props) {
  const [count, setCount] = useState(props.init);

  useEffect(() => {
    document.title = `${count}`;

    console.log("count from hook", count);

    if (count === props.max) {
      setCount(props.init);
    }
  }, [count]);

  return (
    <div>
      Count {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
