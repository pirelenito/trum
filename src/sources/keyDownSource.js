import { play, inputFakeNote } from "../store";
export default dispatch => {
  window.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        return dispatch(inputFakeNote(parseInt(key, 10) - 1));
      case "Escape":
        return dispatch(play(Date.now()));
    }
  });
};
