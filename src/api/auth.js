const SIGNIN_URL =
  'https://serverless-api-teal.vercel.app/api/auth/signin';

export async function signIn(email, password) {
  const response = await fetch(SIGNIN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Sign in failed. Please try again.');
  }

  return data.data;
}
