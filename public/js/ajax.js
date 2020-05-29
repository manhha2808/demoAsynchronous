let ajaxFunction = {
    asyncTrueAjax: () => {
        console.log('start calling ajax with async: true => ' + moment().format('HH:mm:ss.SSS'));

        $.ajax({
            async: true,
            type: "GET",
            url: "/users",
            processData: false,
            contentType: false,
            success: function (response) {
                ajaxFunction.ajaxSuccess(response);
            }
        });

        Promise.resolve().then(() => {
            console.log('Promise => ' + moment().format('HH:mm:ss.SSS'));
        });

        setTimeout(() => {
            console.log('setTimeOut function => ' + moment().format('HH:mm:ss.SSS'));
        }, 0);

        console.log('end of function => ' + moment().format('HH:mm:ss.SSS'));
    },

    asyncFalseAjax: () => {
        console.log('start calling ajax with async: false => ' + moment().format('HH:mm:ss.SSS'));

        $.ajax({
            async: false,
            type: "GET",
            url: "/users",
            processData: false,
            contentType: false,
            success: function (response) {
                ajaxFunction.ajaxSuccess(response);
            }
        });

        Promise.resolve().then(() => {
            console.log('Promise resolve => ' + moment().format('HH:mm:ss.SSS'));
        });

        setTimeout(() => {
            console.log('setTimeOut function => ' + moment().format('HH:mm:ss.SSS'));
        }, 100);

        console.log('end of function => ' + moment().format('HH:mm:ss.SSS'));
    },

    ajaxSuccess: (response) => {
        console.log('start execute success function of ajax => ' + moment().format('HH:mm:ss.SSS'));
        let html = '';
        response.forEach((result) => {
            html += `<tr>`;
            html += `<td>${result.id}</td>`;
            html += `<td>${result.team}</td>`;
            html += `<td>${result.name}</td>`;
            html += `<td>${result.position}</td>`;
            html += `<td>${result.gender}</td>`;
            html += `</tr>`;
        });
        $('#users-list-table tbody').html(html);
        $('#ajaxModal').modal('show');

        console.log('end of success function => ' + moment().format('HH:mm:ss.SSS'));
    }
}

$(document).ready(function () {
    $(document).on('click', '#async-true', function (e) {
        e.preventDefault();
        ajaxFunction.asyncTrueAjax();
    });

    $(document).on('click', '#async-false', function () {
        e.preventDefault();
        ajaxFunction.asyncFalseAjax();
    });

    $(document).on('click', '#alert-msg', function () {
        e.preventDefault();
        alert('Non-Blocking');
    });

    $(document).on('click', '#console-msg', function () {
        e.preventDefault();
        console.log('Non-Blocking');
    });
});
