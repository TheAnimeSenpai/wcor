import toastr from 'toastr';
import swal from 'sweetalert';

export { toastrnotify, swalnotify, NotificationType };

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": 5000,
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const NotificationType = {
    Success: 'success',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Question: 'question'
}

function toastrnotify(message: string, title: string, notificationType: string = this.NotificationType.Info) {
    switch (notificationType) {
        case 'success':
            return toastr.success(message, title);
        case 'warning':
            return toastr.warning(message, title);
        case 'info':
            return toastr.info(message, title);
        case 'error':
            return toastr.error(message, title);
    }
}

function swalnotify(message: string, title: string, notificationType: string = this.NotificationType.Info) {
    swal({
        title: title,
        text: message,
        icon: notificationType,
    })
}

// function notifySuccess(title, message) {
//     toastr.success(message, title);
// }

// function notifyError(title, message) {
//     toastr.error(message, title);
// }