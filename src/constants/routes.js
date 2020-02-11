import TaskManagement from "../container/Taskboard"
import AdminContainer from "../container/Admin"

export const ADMIN_LAYOUT_ROUTES = [
  {
    path: "/",
    exact: true,
    name: "Admin",
    component: AdminContainer
  },
  {
    path: "/task-board",
    exact: true,
    name: "Task Management",
    component: TaskManagement
  }
]
