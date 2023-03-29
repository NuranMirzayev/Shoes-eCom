import { useState } from 'react';
import './signUp.css';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';


enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  firstName: String;
  lastName: String;
  age: Number;
  gender: GenderEnum;
  check: String;
  dateOfBirthday: String;
  password: Number;
  email: String;
}

const SignUp = () => {

  const [isSwitch, setIsSwitch] = useState(false);

  const handleClickSwitch = (): void => {
    setIsSwitch(!isSwitch)
  }

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInput>({
    // Proverko ot moshinoOtpecatki naprimer yesli napiwem lastName1 to owibka budet (Bitaxon)) )
    defaultValues: {
      firstName: "",
      lastName: ""
    },
    mode: 'onChange'
  });
  const onSubmit: SubmitHandler<IFormInput> = data => {
    reset();
    console.log(data);
  }

  // console.log(errors);

  return (

    <div className='signUp'>
      {isSwitch ? <Navigate to="/log in" /> :
        <div className='box_form'>
          <div className='form_left_img '>

            <button onClick={handleClickSwitch} className='span_left_icon'>
              <KeyboardBackspaceIcon sx={{ fontSize: "30px" }} />
              <span className='a_left_text'>{isSwitch ? 'Switch to Sign up' : 'Switch to Login'}
              </span>
            </button>

          </div>
          <div>

            <form className='form_sign_up' onSubmit={handleSubmit(onSubmit)}>
              <h2 id='h3'>{isSwitch ? 'Login' : 'Sign up'}</h2>
              <input className='input' type="email" placeholder="Email" {...register("email", {
                pattern: {
                  value: /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/,
                  message: 'Error '
                },
                required: "This field is Email"
              })} />
              <span className='span_errors'>
                {errors?.email && <p style={{ color: "red", fontSize: '14px' }}>{errors?.email?.message || "Errors"}</p>}
              </span>
              <input className='input' type="password" placeholder="Password" {...register("password", {
                required: "This field is Password",
                minLength: {
                  value: 8,
                  message: "Min length 8"
                }
              })} />
              <span className='span_errors'>
                {errors?.password && <p style={{ color: "red", fontSize: '14px' }}>{errors?.password?.message || "Errors"}</p>}
              </span>
              <input className='input' type="text" placeholder="First name" {...register("firstName", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Min length 5"
                }
              })} />
              <span className='span_errors'>
                {errors?.firstName && <p style={{ color: "red", fontSize: '14px' }}>{errors?.firstName?.message || "Errors"}</p>}
              </span>
              <input className='input' type="text" placeholder="Last name" {...register("lastName", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Min length 5"
                }
              })} />
              <span className='span_errors' >
                {errors?.lastName && <p style={{ color: "red", fontSize: '14px' }}>{errors?.lastName?.message || "Errors"}</p>}
              </span>
              <input className='input' type="date" placeholder="Day/Month/Year" {...register("dateOfBirthday", {})} />
              <div className='check'>
                <input className='checking' {...register("gender", { required: true })} type="radio" value="Male" />Male
                <input className='checking' {...register("gender", { required: true })} type="radio" value="Female" />Female
                <input className='checking' {...register("gender", { required: true })} type="radio" value="Other" />Other
              </div>
              <div className='check'>
                <input className='checking' type="checkbox" placeholder="check" {...register("check", { required: true })} />
                <span className='span_check'>Sign up for emails to get updates from Space Shoes on products ,offers ,and your Member benefits</span>
              </div>
              <button className='btn_submit' type="submit" disabled={!isValid}> Sign up</button>
              {/* <input className='btn_submit' type="submit" disabled={!isValid}/> */}
            </form>

          </div>

        </div>

      }
    </div>
  )
}

export default SignUp




// Dobavit:
// 1. Patterns
// 4. Polucit Token  