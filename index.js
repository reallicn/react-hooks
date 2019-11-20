import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

class ButtonSize extends React.Component {
  state = {
    close: true
  };

  handleSizeChange = e => {
    const { close } = this.state;
    this.setState({
      close: !close
    });
  };

  render() {
    const { close } = this.state;
    return (
      <div
        style={{
          width: 500,
          height: 500,
          background: "yellow",
          position: "relative"
        }}
      >
        <div
          onClick={this.handleSizeChange}
          style={{
            width: 50,
            height: 50,
            lineHeight: "50px",
            background: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: 25,
            cursor: "pointer",
            position: "absolute",
            bottom: 20,
            right: 20
          }}
        >
          {close ? "展开" : "收起"}
        </div>
        {!close && (
          <div style={{ position: "absolute", right: 20, bottom: 80 }}>
            <div
              style={{
                width: 50,
                height: 50,
                lineHeight: "50px",
                background: "blue",
                color: "white",
                textAlign: "center",
                borderRadius: 25,
                cursor: "pointer"
              }}
            >
              充值
            </div>
            <div
              style={{
                width: 50,
                height: 50,
                lineHeight: "50px",
                marginTop: 10,
                background: "blue",
                color: "white",
                textAlign: "center",
                borderRadius: 25,
                cursor: "pointer"
              }}
            >
              体现
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<ButtonSize />, document.getElementById("container"));
