
/**
 *
 */
export default function addTask(tasks) {
	if ('requestIdleCallback' in window) {
        let backgroundTask = deadline => {
    
    	while (deadline.timeRemaining() > 0 && 0 < task.length)
          tasks.shift()();
    
        if (tasks.length > 0) {
          	console.warn(`Tasks count: ${tasks.length}`);
    			requestIdleCallback(backgroundTask);
    	}
    };

    requestIdleCallback(backgroundTask);
  }
  else if (window.setImmediate) {
    let c = tasks.length;
    while (c --> 0)
      setImmediate(tasks.shift());
  }
  else {
    while (tasks.length)
      setTimeout(task.shift(), 1);
  }
}
