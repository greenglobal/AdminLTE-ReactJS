let initial = {};

function notification(state = initial, action) {
  switch (action.type) {
    case "SHOW_ERROR":
      return {
        type: 'error',
        title: action.title,
        message: action.message
      };
    case "CLOSE_NOTIFICATION":
      return {}
    default:
      return state;
  }
}

export {notification};
