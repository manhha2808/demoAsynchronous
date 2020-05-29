let ajaxFunction = {
    asyncTrueAjax: () => {
        console.log(1);

        $.ajax({
            async: true,
            type: "GET",
            url: "/users",
            processData: false,
            contentType: false,
            success: function (response) {
                console.log(2);
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
                console.log(3);
            }
        });

        Promise.resolve().then(() => {
            console.log('Promise');
        });

        setTimeout(() => {
            console.log(4);
        }, 0);

        console.log(5);
    },

    asyncFalseAjax: () => {
        console.log(1);
        setTimeout(() => {
            $.ajax({
                async: false,
                type: "GET",
                url: "/users",
                processData: false,
                contentType: false,
                success: function (response) {
                    console.log(2);
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

                    console.log(3);
                }
            });
        }, 5000)


        Promise.resolve().then(() => {
            console.log('Promise');
        });

        setTimeout(() => {
            console.log(4);
        }, 0);

        console.log(5);
    }
}

$(document).ready(function () {
    $(document).on('click', '#async-true', function () {
        ajaxFunction.asyncTrueAjax();
    });

    $(document).on('click', '#async-false', function () {
        ajaxFunction.asyncFalseAjax();
    });

    $(document).on('click', '#alert-msg', function () {
        alert('Non-Blocking');
    });

    $(document).on('click', '#console-msg', function () {
        console.log('Non-Blocking');
    });
});
