import { Component } from 'react'
export default class Child extends Component {
    componentWillUnmount(): void {
        console.log(1111);
        // chạy cuối cùng khi phần tử xóa khỏi DOM
        // thường dùng để clear Timeout xóa khỏi bộ nhớ
    }
  render() {
    return (
      <div>
        Child
      </div>
    )
  }
}

