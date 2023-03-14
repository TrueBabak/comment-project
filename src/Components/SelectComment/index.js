import React, { useContext } from "react";
import Loading from "../Common/LoadingComponets";
import { Context } from "../Context";

const SelectCommentComp = () => {
  const { SelectComment, setSelectComment } = useContext(Context);
  return (
    <div>
      <div>{SelectComment ? SelectComment.massage : <Loading />}</div>
    </div>
  );
};

export default SelectCommentComp;
