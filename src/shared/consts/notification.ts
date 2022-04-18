import { message } from "antd";

//messasge notifications
export const alertMessage = (msg: string, type: 'success'|'info'|'error') =>{
  (type==='success') ? message.success(msg) : (type==='info') ? message.info(msg) : message.error(msg) ;
}