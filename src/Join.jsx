
import './App.css';

function Join() {
  return (
    <div>
    <h1 className='join-title'>Join Us</h1>
    <div className='join-form'>
        
        <br />
        <fieldset className="form">
            <legend>Fill the Form</legend>
            <form>
                <input type="text" placeholder="First Name" />
                <br />
                <input type="text" placeholder="Last Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <textarea placeholder='Message' />
                <br /> 
                <button>Join</button>
            </form>
        </fieldset>
        
    </div>
    </div>
  );
}

export default Join;