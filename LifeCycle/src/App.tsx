import { Component } from 'react'
import Child from './components/Child';
interface Props{

}
interface State{
  name:string,
  age:number,
  count:number,
  isActice:boolean,
}
export default class App extends Component<Props,State> {
  constructor(props:Props){
    super(props);
    this.state = {
      // chứa những dự liệu 
      name: "Xuân Nhất",
      age:19,
      count: 0,
      isActice:true,
    }
  }
  componentWillMmount(): void {
    console.log("componentWillMmount được gọi");
    // chạy trước render cho nên ở component có thể tính toán lại state hoặc props
    // nhưng nên lưu ý thời gian mà chuyển sang render nhanh
  }
  componentDidMount(): void {
    console.log("componentDidMount được gọi");
    // các thành phần của component được gắn vào DOM
    // có thể thực hiện các tương tác với DOM
    // nơi lí tưởng để callAPI  lấy data render ra component
  }
  hanldClick=() => {
    // khi muốn thay đổi state đối với class component thì dùng this.state
      this.setState({count:this.state.count + 1});
  }
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    // bắt buộc phải trả về true hoặc false
    return true;
  }
  componentWillUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("componentWillUpdate");
    // chạy trước re-render nên cũng có thể dùng để tính toán lại state hoặc props
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("componentDidUpdate");
    // chạy sau khi component re-render
    // các phần tử của component nó được gắn kết vào DOM cho nên có thể dùng để tương tác với DOM
  }
  handleRemove = () =>{
    this.setState({
      isActice: !this.state.isActice,
    })
  }
  render() {
    console.log("component bắt đầu re-render");
    // không được setState ở đây
    // nếu setState ở đây thì component nó re-render liên tục ==> chạy vô hạn
    return (
      <div>
        {
          /* 
            Tạo class component
            life cycle (vòng đời của 1 component ==> chỉ áp dụng với
              class trải qua 4 giai đoạn )
              1. giai đoạn khởi tạo (initial)
              - khởi tạo state, props
              2. gian đoạn mounting (gắn vào thêm vào)
              - cung cấp  các phương thức mặc định: 
              + componentWillMouse
              + componentDidMouse
              - sau khi giai đoạn khởi tạo xong tiếp đến chạy vào phương thức willMount sau đó chay đến render() rồi mới chạy đến hàm Didmount
              3. giai đoạn updating (thay đổi)
              - xảy ra khi nào khi state hoặc props thay đổi thì chạy vào giai đoạn update
              - cung cấp các phương thức 
              1) shouldComponentUpdate ==> bắt buộc phải return về true hoặc false
              nếu không khai báo hàm thì mặc định là true
              2) componentWillUpdate
              3) componentDidUpdate
              4. giai đoạn unmountig (gỡ bỏ xóa bỏ)
              - xảy ra khi component bị xóa bỏ khỏi DOM
            )
          */
        }
        {this.state.isActice?<Child />:""}
        <button onClick={this.handleRemove}>Remove Child</button>
        <button onClick={this.hanldClick}>Count:{this.state.count}</button>
      </div>
    )
  }
}


