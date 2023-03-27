import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subscribe: ${subscribe}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="subscribe">Subscribe: </label>
        <input type="checkbox" id="subscribe" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
