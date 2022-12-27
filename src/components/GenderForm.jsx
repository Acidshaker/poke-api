import React from "react";
import { useDispatch } from "react-redux";
import { setGenderTrainerGlobal } from "../store/slices/genderTrainer.slice";
import { setLoadingGlobal } from "../store/slices/loader.slice";

const GenderForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.gender.value);
    if (e.target.gender.value) {
      dispatch(setGenderTrainerGlobal(e.target.gender.value));
      dispatch(setLoadingGlobal(true));
    }
  };

  return (
    <form className="form__select" onSubmit={handleSubmit}>
      <p className="input__gender--title">Select your gender:</p>
      <div className="input__radio--container">
        <div>
          <input type="radio" name="gender" id="male" value="male" required />
          <p className="input__select">Male</p>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            required
          />
          <p className="input__select">Female</p>
        </div>
      </div>
      <button className="select__btn">Lets go!</button>
    </form>
  );
};

export default GenderForm;
