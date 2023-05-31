$(document).ready(function () {
    const $taskList = $('#taskList');
    const $completedTaskList = $('#completedTaskList');
    const $addTaskForm = $('#addTaskForm');
    const $newTaskInput = $('#newTaskInput');

    $addTaskForm.on('submit', function (e) {
        e.preventDefault();
        const taskText = $newTaskInput.val().trim();
        if (!taskText) return;
        createTaskItem(taskText);
        $newTaskInput.val('');
    });

    function createTaskItem(taskText) {
        const $listItem = $('<li></li>');
        const $checkbox = $('<input type="checkbox">');
        const $label = $('<label></label>');
        const $completionDate = $('<span class="completion-date"></span>');

        $checkbox.on('change', function () {
            $listItem.toggleClass('completed');
            if ($checkbox.is(':checked')) {
                const currentDate = new Date();
                const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
                $completionDate.text(`Completed on: ${formattedDate}`);
                $taskList.children().detach($listItem);
                $completedTaskList.append($listItem);
            } else {
                $completionDate.text('');
                $completedTaskList.children().detach($listItem);
                $taskList.append($listItem);
            }
        });

        $label.text(taskText);
        $listItem.append($checkbox, $label, $completionDate);
        $taskList.append($listItem);
    }
});
