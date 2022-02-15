import React, { useState } from "react";
import Switch from "../components/Switch";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <h2>토글 창 구현하기 페이지</h2>
      <Switch
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
}

export default Toggle;
