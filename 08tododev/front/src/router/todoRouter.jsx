import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const loading = <div className="bg-red-500">loading...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={loading}>
          <TodoList />
        </Suspense>
      ),
    },
    //처음 todo 리스트로 갈 때 열릴 페이지
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "add",
      element: (
        <Suspense fallback={loading}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: "list/:tno",
      element: (
        <Suspense fallback={loading}>
          <TodoRead />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
