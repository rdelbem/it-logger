import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from "./types";

//get all logs
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//delete log
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`http://localhost:5000/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
