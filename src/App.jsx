import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              ああああ
              <button>完了</button>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              いいい
              <button>完了</button>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              うううう
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
