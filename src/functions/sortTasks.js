const sortTasks = (sortDirection, tasks, sort) => {
  switch (sortDirection ? sort.current.value : "A-Z") {
    case "A-Z":
      return tasks.sort((a, b) => (a.title > b.title ? 1 : -1));
    case "Z-A":
      return tasks.sort((a, b) => (a.title < b.title ? 1 : -1));
    case "New-old":
      return tasks.sort((a, b) => (a.date > b.date ? 1 : -1));
    case "Old-new":
      return tasks.sort((a, b) => (a.date < b.date ? 1 : -1));
    default:
      return tasks.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
};

export default sortTasks;
