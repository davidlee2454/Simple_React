//node_modules
//slices
import { AppActions } from "store";
//sagas
import { addEmployeeSaga, getEmployeesSaga, editEmployeeSaga, deleteEmployeeSaga, sortEmployeeSaga } from "./employee.saga";

import { all, takeLatest } from "redux-saga/effects";

//sagas
function* rootSaga() {
  //currency
  yield all([
    takeLatest(AppActions.employee.getEmployees.type, getEmployeesSaga),
    takeLatest(AppActions.employee.addEmployee.type, addEmployeeSaga),
    takeLatest(AppActions.employee.editEmployee.type, editEmployeeSaga),
    takeLatest(AppActions.employee.deleteEmployee.type, deleteEmployeeSaga),
    takeLatest(AppActions.employee.sortEmployee.type, sortEmployeeSaga),
  ]);
}

export default rootSaga;
