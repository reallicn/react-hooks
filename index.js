import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

/**
  * 核心代码是css绝对定位和相对定位 position:realative/absolute;
  * 给外层容器添加相对定位，再给内层添加相对定位，控制显示隐藏即可
  * 可以在此基础上添加 in/out 动画
  */

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
          <div style={
              !close?
              { visibility: "hidden",opacity: 0,position: "absolute", right: 20, bottom: 80,transition:"all 0.4s linear" }:
              { visibility: "visible",opacity: 1,position: "absolute", right: 20, bottom: 80,transition:"all 0.4s linear" }:
            }>
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
