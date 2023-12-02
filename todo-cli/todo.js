const todoList = () => {
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  var dateToday = new Date();
  const date = formattedDate(dateToday);
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let temArr = [];
    all.forEach((element) => {
      if (element["dueDate"] < today && element["completed"] === false) {
        temArr.push(element);
      }
    });
    return temArr;
  };

  const dueToday = () => {
    let temArr = [];
    all.forEach((element) => {
      if (element["dueDate"] === today) {
        temArr.push(element);
      }
    });
    return temArr;
  };

  const dueLater = () => {
    let temArr = [];
    all.forEach((element) => {
      if (element["dueDate"] > today) {
        temArr.push(element);
      }
    });
    return temArr;
  };

  const toDisplayableList = (list) => {
    return list.map((element) => {
      let done = "x";
      if (element["completed"] === false) {
        done = " ";
      }
      if (element["dueDate"] === today) {
        return (`[${done}] ${element["title"]}`);
      } else {
        return (`[${done}] ${element["title"]} ${element["dueDate"]}`);
      }
    }).join('\n');
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList