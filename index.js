$(document).ready(function () {
    $('form').submit(function (e) {
      e.preventDefault();
  
      const task = $('#task-input').val().trim();
  
      if (task !== '') {
        const taskItem = $(`
          <li class="task-item">
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
          </li>
        `);
  
        $('#task-list').append(taskItem);
        $('#task-input').val('');
      }
    });

    $('#task-list').on('click', '.delete-btn', function () {
      });
  
    
    $('#task-list').on('click', '.delete-btn', function () {
      $(this).parent().remove();
    });
  });