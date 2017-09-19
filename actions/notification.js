function showError(title, message) {
  return function(dispatch) {
    dispatch({
      type: 'SHOW_ERROR',
      title: 'Test title',
      message: 'Xin chao cac ban'
    });

    setTimeout(() => {
      dispatch({
        type: 'CLOSE_NOTIFICATION'
      });
    }, 3000);
  }
}

export {showError};
