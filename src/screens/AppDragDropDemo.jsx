import React, { useState } from 'react';

function AppDragDropDemo() {
  const [tasks, setTasks] = useState([
    { name: 'Learn Angular', category: 'wip', bgColor: 'yellow' },
    { name: 'Learn React', category: 'wip', bgColor: 'pink' },
    { name: 'Learn Vue', category: 'complete', bgColor: 'red' },
  ]);

  function onDragStart(e, name) {
    e.dataTransfer.setData('name', name);
  }
  function onDrop(ev, cat) {
    const name = ev.dataTransfer.getData('name');
    const modifiedTask = tasks.map(task => {
      if (task.name === name) {
        task.category = cat;
      }
      return task;
    });
    setTasks(modifiedTask);
  }

  let formattedTasks = {
    wip: [],
    complete: [],
  };
  tasks.forEach(task => {
    formattedTasks[task.category].push(
      <div
        onDragStart={e => onDragStart(e, task.name)}
        className='draggable'
        draggable
        key={task.name}
        style={{ backgroundColor: task.bgColor }}
      >
        {task.name}
      </div>
    );
  });

  function onDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className='container-drag'>
      <h2 className='header'>Drag $ Drop</h2>
      <div
        className='wip'
        onDragOver={onDragOver}
        onDrop={e => onDrop(e, 'wip')}
      >
        <span className='task-header'>WIP</span>
        {formattedTasks.wip}
      </div>
      <div
        className='droppable'
        onDrop={e => onDrop(e, 'complete')}
        onDragOver={onDragOver}
      >
        <span className='task-header'>COMPLETED</span>
        {formattedTasks.complete}
      </div>
    </div>
  );
}

export default AppDragDropDemo;
