(function () {
    'use strict';
    var itemLoaded = false,
        typesList = [],
        taskList = [],
        viewBtn, spinner, mainContainer, tbody,
        addNewBtn, addNewForm, submitBtn, cancelBtn;

    $(document).ready(init);

    function init() {
        viewBtn = $('#viewBtn');
        mainContainer = $('#mainContainer');
        spinner = $('#spinner');
        tbody = $('tbody');
        addNewBtn = $('#addNewBtn');
        addNewForm = $('#addNewForm');
        submitBtn = addNewForm.find('button:first');
        cancelBtn = addNewForm.find('button:last');


        addNewBtn.find('button').click(showHideForm);
        cancelBtn.click(showHideForm);
        submitBtn.click(addNewTask);
        viewBtn.click(getItems);

        //addNewForm.hide();
    }

    function getItems() {
        addNewForm.hide();
        addNewBtn.show();
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
        buildToDoList();
        defineOptions(addNewForm.find('select'));
        mainContainer.show();
        spinner.hide();
    }

    function buildToDoList() {
        tbody.empty();
        taskList.sort(taskSort);
        taskList.forEach(buildRow);

        tbody.find('input:not(:checked)').change(function (e) {
            var id = $(this).attr('id');
            taskList.forEach(function (task) {
                if (task.id == id) {
                    task.done = true;
                }
            });
            buildToDoList();
        });
    }

    function buildRow(task, i) {
        task.id = 'task' + i;
        var rowClass = task.done ? ' class="success"' : '',
            input = task.done ?
            '<input type="checkbox" id="' + task.id + '" checked disabled>' :
            '<input id="' + task.id + '"type="checkbox">',
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

    function defineOptions(select) {
        typesList.forEach(function (type) {
            var option = '<option id="type' + type.id + '">' + type.name + '</option>';
            select.append(option);
        });
    }

    function addNewTask() {
        var task = addNewForm.find('input:first').val(),
            expiresAt = addNewForm.find('input:last').val(),
            type = addNewForm.find('option:selected').attr('id').replace('type',''),
            newTask = {
                task: task,
                expires_at: +expiresAt,
                type: type,
                created_at: Date.parse(moment())
            };

        taskList.push(newTask);

        addNewForm.find('input').val('');

        showHideForm();
        buildToDoList();
    }

    function showHideForm() {
        addNewForm.toggle();
        addNewBtn.toggle();
    }

    function taskSort(a, b) {
        return b.expires_at - a.expires_at;
    }
})();