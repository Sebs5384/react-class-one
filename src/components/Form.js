import { ValidationInput } from './ValidationInput.js';

export function Form(props) {
  return (
    <>
      <form className="form">
        <div>
          <div className="gap">
            <label htmlFor="email-input">Your Email</label>
            <ValidationInput id="email-input" minLength={props.minLength} placeholder={'e.g sebas@hotmail.com'} />
          </div>
          <div className="gap">
            <label htmlFor="password-input">Password</label>
            <ValidationInput id="password-input" minLength={props.minLength} isPassword />
          </div>
        </div>
      </form>
    </>
  );
}
