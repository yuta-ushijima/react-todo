import React from "react";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            ああああ
            <div>
              <button>完了</button>
              <button>戻す</button>
            </div>
          </li>
          <li>
            いいい
            <div>
              <button>完了</button>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>
            うううう
            <div>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
