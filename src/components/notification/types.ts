import { ReactElement } from "react";

/**
 * ## INotificationItem
 * Defines the shape of notification item
 */
export interface INotificationItem{
    id:string,
    source:string,
    date:string,
    body:string|ReactElement,
    meetDate?:string,
    meetHour?:string,
    onCancel?:(notificationId:string)=>void,
    onConfirm?:(notificationId:string)=>void,
    onNotificationClick?:(notificationId:string)=>void,
    confirmed?:boolean,
    confirmedText?:string,
    cancelButtonText?:string,
    confirmButtonText?:string,
    isConfirmable?:boolean,
    isCancelable?:boolean,
}

/**
 * ## INotification
 * Defines the shape of the Notification
 */
export interface INotification{
    items:INotificationItem[],
    emptyText?:string,
    isOpen?:boolean,
    onCancel?:(id:string)=>void,
    onConfirm?:(id:string)=>void,
    onNotificationClick?:(id:string)=>void
}