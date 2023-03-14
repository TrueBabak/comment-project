import React, { useContext } from "react";
import EmptyComponent from "../Common/EmptyComponents";
import Loading from "../Common/LoadingComponets";
import { Context } from "../Context";
import ShowSelectedComponent from "./ShowSelectedComponent";

const SelectCommentComp = () => {
  const { SelectComment, setSelectComment } = useContext(Context);
  return (
    <div>
      <div>
        {SelectComment ? (
          <ShowSelectedComponent />
        ) : (
          <EmptyComponent title="Please select a comment !!" />
        )}
      </div>
    </div>
  );
};

export default SelectCommentComp;
