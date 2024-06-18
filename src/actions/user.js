import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    console.log(process.env.REACT_APP_API_URL)
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/user`);

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, 
      }
    );

    localStorage.setItem('token',data.token)

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/logout`);

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/me`);

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const updateUser =
  (name, email, password, skills, about) => async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });

      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/update`,
        {
          name,
          email,
          password,
          skills,
          about,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization":localStorage.getItem('token')
          },
        }
      );

      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const addTimeline = (title, description, date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/admin/timeline/add`,
      {
        title,
        description,
        date,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization":localStorage.getItem('token')
        },
      }
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/timeline/${id}`,{
      headers: {
        "Content-Type": "application/json",
        "Authorization":localStorage.getItem('token')
      },
    });

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export const addProject =
  (title, url, image, description, techStack) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PROJECT_REQUEST",
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/project/add`,
        { title, url, image, description, techStack },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization":localStorage.getItem('token')
          },
        }
      );

      dispatch({
        type: "ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PROJECT_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/project/${id}`,{
      headers: {
        "Content-Type": "application/json",
        "Authorization":localStorage.getItem('token')
      },
    });

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/contact`,
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error.response.data.message,
    });
  }
};
