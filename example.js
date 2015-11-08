(function () {
    'use strict';
    var itemLoaded = false,
        typesList = [],
        taskList = [],
        viewBtn, spinner, mainContainer, tbody;

    $(document).ready(init);

    function init() {
        viewBtn = $('#viewBtn');
        mainContainer = $('#mainContainer');
        spinner = $('#spinner');
        tbody = $('tbody');
        viewBtn.click(getItems);
    }

    function getItems() {
        if (itemLoaded) {
            return;
        }
        itemLoaded = true;
        spinner.show();
        mainContainer.hide();

        var tasks = new Promise(function (resolve, reject) {
            $.get('http://rygorh.dev.monterosa.co.uk/todo/items.php', resolve)
        });
        var types = new Promise(function (resolve, reject) {
            $.get('http://rygorh.dev.monterosa.co.uk/todo/types.php', resolve)
        });

        Promise.all([tasks, types]).then(successLoaded);
    }

    function successLoaded(results) {
        taskList = results[0] || [];
        typesList = results[1] || [];
        taskList.sort(taskSort);
        buildToDoList();
        mainContainer.show();
        spinner.hide();
    }

    function buildToDoList() {
        taskList.forEach(buildRow);

        tbody.find('input:not(:checked)').change(function(e){
            $(this).prop('disabled', true);
            $(this).parent().parent().addClass('success');
        })
    }

    function buildRow(task) {
        var rowClass = task.done ? ' class="success"' : '',
            input = task.done ? '<input type="checkbox" checked disabled>' : '<input type="checkbox">',
            row = '<tr' + rowClass + '><td>' + input
                + '</td><td>' + task.task
                + '</td><td>' + moment(task.created_at).format('lll')
                + '</td><td>' + moment(task.expires_at).format('lll')
                + '</td><td>' + defineType(task.type) + '</td></tr><tr>123</tr>';
        tbody.append(row);
    }

    function defineType(id) {
        var result = '';
        typesList.forEach(function (type) {
            if (type.id == id) {
                result = type.name || '';
            }
        });
        return result;
    }

    function taskSort(a, b) {
        return a.expires_at - b.expires_at;
    }
})();