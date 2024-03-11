import {
    get_quizData_Failure,
    get_quizData_Request,
    get_quizData_Success,
  } from "./actiontype";
  
  export const fetch_quizData_Request = () => ({
    type: get_quizData_Request,
  });
  
  export const fetch_quizData_Failure = () => ({
    type: get_quizData_Failure,
  });
  
  export const fetch_quizData_Success = (quizData) => ({
    type: get_quizData_Success,
    payload: quizData,
  });
  
  export const fetchQuizData =
    (category, difficulty, numberOfQuestions) => async (dispatch) => {
      try {
        dispatch(fetch_quizData_Request());
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        dispatch(fetch_quizData_Success(data));
        console.log(data);
      } catch (error) {
        console.error("Error fetching weather data", error);
        dispatch(fetch_quizData_Failure());
      }
    };