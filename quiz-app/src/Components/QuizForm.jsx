import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const QuizForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");

  const { isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuizData(category, difficulty, numberOfQuestions));
    console.log("Name:", name);
    console.log("Category:", category);
    console.log("Difficulty:", difficulty);
    console.log("Number of Questions:", numberOfQuestions);
    navigate("/quiz");
  };

  return (
    <Center>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width:"130%",
            backgroundColor: "#f0f0f0",
          }}
        >
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="lg" color="black">
              Enter Your Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              borderRadius="md"
              focusBorderColor="#3182ce"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel fontWeight="bold" fontSize="lg" color="black">
              Select Category
            </FormLabel>
            <Select
              placeholder="Select Category"
              borderRadius="md"
              focusBorderColor="#3182ce"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
            </Select>
          </FormControl>
          <FormControl mt="4">
            <FormLabel fontWeight="bold" fontSize="lg" color="black">
              Select Difficulty
            </FormLabel>
            <Select
              placeholder="Select Difficulty"
              borderRadius="md"
              focusBorderColor="#3182ce"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </FormControl>
          <FormControl mt="4">
            <FormLabel fontWeight="bold" fontSize="lg" color="black">
              Choose Number of Questions
            </FormLabel>
            <Input
              type="number"
              min="1"
              max="50"
              borderRadius="md"
              focusBorderColor="#3182ce"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            borderRadius="md"
            _hover={{ bg: "#3182ce" }}
            _active={{ bg: "#3182ce" }}
            isLoading={isLoading}
            loadingText="Starting Quiz..."
            mt="4"
          >
            START QUIZ
          </Button>
          {isError && (
            <Text color="red.500" fontSize="sm" mt="4">
              Something went wrong. Please try again later.
            </Text>
          )}
        </div>
      </form>
    </Center>
  );
};

export default QuizForm;
