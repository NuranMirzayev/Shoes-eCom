import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './logIn.css';

import EastIcon from '@mui/icons-material/East';
import { Navigate } from 'react-router-dom';



interface IFormInput {
  email: string;
  password: string
}

const LogIn = () => {

  const [isSwitch, setIsSwitch] = useState(false);

  const handleClickSwitch = (): void => {
    setIsSwitch(!isSwitch)
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    // Proverko ot moshinoOtpecatki naprimer yesli napiwem lastName1 to owibka budet (Bitaxon)) )
    // mode: 'onBlur'
    mode: 'onChange'
  });
  const onSubmit: SubmitHandler<IFormInput> = data => {
    reset();
    console.log(data);
  }




  return (
    <div className='logIn'>
      {isSwitch ? <Navigate to="/sign up" /> :
        <div className="box_form">
          <div className="left_box_form">
            <h2 className='text_form'>{isSwitch ? 'Sign up' : 'Login'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder='Email'
                className='input_left' type="text"
                {...register('email', {
                  required: "Email is require field!",
                  pattern: {
                    value: /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/,
                    message: 'Error'
                  }
                })}
              />
              <span className='span_errors'>
                {errors?.email && <span style={{ color: "red", fontSize: '14px' }}>{errors?.email?.message || null}</span>}
              </span>

              <input
                placeholder='Password'
                className='input_left'
                type="password" {...register('password', {
                  required: true,
                  minLength: {
                    value: 5,
                    message: "Min length 5"
                  }
                })} />
              <span className='span_errors'>
                {errors?.password && <span style={{ color: "red", fontSize: '14px' }}>{errors?.password?.message || null}</span>}
              </span>

              <div className='logIn_btn_div'>
                <button className='btn_submit_logIn' type="submit">Login</button>
              </div>

            </form>

          </div>
          <div className="right_box_form ">
            <button onClick={handleClickSwitch} className='span_right_icon'>
              <span className='a_left_text'>
                {isSwitch ? 'Switch to Login' : 'Switch to Sign up'}
              </span>
              <EastIcon sx={{ fontSize: "30px" }} />
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default LogIn