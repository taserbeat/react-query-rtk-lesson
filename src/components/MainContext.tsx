import { VFC } from 'react';

import ClassicalFetchA from './ClassicalFetchA';
import ClassicalFetchB from './ClassicalFetchB';
import ContextA from './ContextA';
import ContextB from './ContextB';

/*
従来手法のコンポーネントをすべてマウントするコンポーネント
useContextを使用していると、不要な再レンダリングが発生してしまう。
useContextで複数のステートを管理している場合にどれか1つのステートが更新されると、
コンテキストを利用しているすべてのコンポーネントが再レンダリングされてしまう。
[例]
ContextAでダークモードのステートを変更する度にuseStateContextの再レンダリングが走る。
このとき、ClassicalFetchA, BにおいてもuseStateContextを使用しているので不要な再レンダリングが走ってしまっている。
*/
const MainContext: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <ClassicalFetchA />
      <ClassicalFetchB />
      <ContextA />
      <ContextB />
    </div>
  );
};

export default MainContext;
