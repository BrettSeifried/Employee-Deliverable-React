import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AuthLogin({ label, onSubmit }) {
  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearForm();
  }, [label]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('An Email and Password (8+ characters) is required');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>{label}</div>
        <section>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formState.email}
            onChange={handleFormChange}
          />
        </section>
        <section>
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
        </section>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : label}
        </button>
      </div>
    </form>
  );
}
