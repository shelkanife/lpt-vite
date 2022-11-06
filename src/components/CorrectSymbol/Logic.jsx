import { useState, useEffect } from "react";
import { groups } from "../../pages/data";

const Logic = (group, func) => {
  const [elements, setElements] = useState({});
  const [words, setWords] = useState({});
  const [value, setValue] = useState(0);
  const [elementName, setElementName] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(
    Array.from({ length: 5 })
  );

  useEffect(() => {
    setElements({ ...groups[group].elements });
    setWords({ ...groups[group].words });
  }, []);

  useEffect(() => {
    if (correctAnswers.filter((e) => e === undefined).length === 0) func(false);
  });

  useEffect(() => {
    if (correctAnswers[value]) {
      setElementName(correctAnswers[value]);
      setInputDisabled(true);
      setBtnDisabled(true);
    } else {
      setElementName("");
      setInputDisabled(false);
    }
  }, [value]);

  const handleChange = (e) => {
    setElementName(e.target.value);
    !e.target.value ? setBtnDisabled(true) : setBtnDisabled(false);
  };

  const checkAnswer = (e) => {
    if (elementName === groups[group].elementsNames[value]) {
      setError(false);
      setInputDisabled(true);
      setBtnDisabled(true);
      const copy = correctAnswers.slice();
      copy[value] = elementName;
      setCorrectAnswers([...copy]);
    } else {
      setError(true);
    }
  };

  const nextElement = () => {
    setValue((prev) => (prev >= 4 ? 0 : ++prev));
  };
  const prevElement = () => {
    setValue((prev) => (prev <= 0 ? 4 : --prev));
  };

  return {
    elements,
    words,
    value,
    error,
    elementName,
    inputDisabled,
    btnDisabled,
    nextElement,
    prevElement,
    handleChange,
    checkAnswer,
  };
};
export default Logic;
