function callAjax (url, async, callback) {
    console.log('start calling ajax: ' + url + ' with async: ' + async +' => ' + moment().format('HH:mm:ss.SSS'));
    return $.ajax({
        async: async,
        type: "GET",
        url: url,
        processData: false,
        contentType: false,
        success: function (response) {
            if (callback)
                callback(response);
            else
                return response;
        }
    });
}

function renderUserHTML (arrayObj) {
    let html = '';

    arrayObj.forEach((result) => {
        html += `<tr>`;
        html += `<td>${result.id}</td>`;
        html += `<td>${result.team}</td>`;
        html += `<td>${result.name}</td>`;
        html += `<td>${result.position}</td>`;
        html += `<td>${result.gender}</td>`;
        html += `</tr>`;
    });

    $('#users-list-table tbody').html(html);
}

function renderTeamHTML (arrayObj) {
    let html = '';

    arrayObj.forEach((result) => {
        html += `<tr>`;
        html += `<td>${result.id}</td>`;
        html += `<td>${result.name}</td>`;
        html += `<td>${result.technical}</td>`;
        html += `</tr>`;
    });

    $('#teams-list-table tbody').html(html);
}

let ajaxFunction = {
    ajaxUserSuccess: (response) => {
        console.log('start execute success function of ajax: /users => ' + moment().format('HH:mm:ss.SSS'));
        renderUserHTML(response);
        console.log('end of success function of ajax users => ' + moment().format('HH:mm:ss.SSS'));
    },

    ajaxTeamSuccess: (response) => {
        console.log('start execute success function of ajax: /teams => ' + moment().format('HH:mm:ss.SSS'));
        renderTeamHTML(response);
        console.log('end of success function of ajax teams => ' + moment().format('HH:mm:ss.SSS'));
    }
}

let externalFunction = () => {
    Promise.resolve().then(() => {
        console.log('this is Promise resolve (Microtask) => ' + moment().format('HH:mm:ss.SSS'));
    });

    setTimeout(() => {
        console.log('this is setTimeOut (Macrotask) function => ' + moment().format('HH:mm:ss.SSS'));
    }, 0);

    console.log('this is console.log => ' + moment().format('HH:mm:ss.SSS'));
}

async function ajaxRefactor () {
        let userList = callAjax('/users', true);
    let teamList = callAjax('/teams', true);

    await teamList.then((teamRecord) => {
        renderTeamHTML(teamRecord);
    });

    await userList.then((userRecord) => {
        renderUserHTML(userRecord);
    });
}

$(document).ready(function () {
    $(document).on('click', '#async-true', function (e) {
        e.preventDefault();
        callAjax('/users', true, ajaxFunction.ajaxUserSuccess)
        callAjax('/teams', true, ajaxFunction.ajaxTeamSuccess);
        $('#ajaxModal').modal('show');
        externalFunction();
    });

    $(document).on('click', '#async-false', function (e) {
        e.preventDefault();
        callAjax('/users', false, ajaxFunction.ajaxUserSuccess)
        callAjax('/teams', false, ajaxFunction.ajaxTeamSuccess);
        $('#ajaxModal').modal('show');
        externalFunction();
    });

    $(document).on('click', '#asynchronous', async function (e) {
        e.preventDefault();
        await ajaxRefactor();
        $('#ajaxModal').modal('show');
        externalFunction();
    });

    $(document).on('click', '#alert-msg', function (e) {
        e.preventDefault();
        alert('Non-Blocking');
    });

    $(document).on('click', '#micro-and-macro', function (e) {
        e.preventDefault();
        externalFunction();
    });
});
