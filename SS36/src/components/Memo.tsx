import React, { memo } from "react";
interface Props {
  name: string;
  increase: Function;
}
function Memo(props: Props) {
  console.log("component memo được gọi");
  return (
    <>
      {/* Memo là HOC: higher order component : hàm bậc cao trong Typescript
    - sẽ đi kiểm tra xem có props nào thay đổi hay không:
    + nếu props thay đổi thì component sẽ render
    + nếu props không thay đổi thì sẽ không render
    - chỉ cần 1 props thay đổi thì component sẽ được render theo 
    chứ không phải là tất cả các Props thay đổi thì mới render
    */}
    </>
  );
}

export default memo(Memo);
