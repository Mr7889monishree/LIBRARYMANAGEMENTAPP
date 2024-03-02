import React from 'react'

const Signin = () => {
  return (
    <main>

      <form  className='SignInForm'  action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="91002c1e-3ed8-46b6-bb61-50a372da16de"/>
        <p>
          <label htmlFor="name">Name:  </label>
          <input
          type="text" 
          placeholder='enter Name'
          required/>
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email"
          placeholder='enter the mail'
          required />
        </p>
        <p>
          <label htmlFor="pass">Password: </label>
          <input type="password" 
          placeholder='enter the password'
          required/>
        </p>

         <button type='submit'>
          Submit
         </button>



      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>

    </main>

  )
}

export default Signin