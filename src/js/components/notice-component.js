

//export default () => {

    let notice = document.createElement("div");
    notice.className = "alert alert-warning alert-dismissible fade ";
    notice.setAttribute('role', 'alert');
    notice.setAttribute('id', 'alertNotice');

    var strongText = document.createElement("strong");
    var iconAlert = document.createElement("i");
    iconAlert.className = "bi bi-exclamation-triangle";
    
    notice.appendChild(iconAlert)
    notice.innerText = "No city found"

    var buttonClose = document.createElement("button");
    buttonClose.className = "btn-close";
    buttonClose.setAttribute('data-bs-dismiss', 'alert');
    buttonClose.setAttribute('alert-label', 'Close');

    notice.appendChild(buttonClose);

    document.getElementById('rowNotice').appendChild(notice);
//}

/*
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
*/