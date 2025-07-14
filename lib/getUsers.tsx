export const GetUsers = async () => {
  const res = await fetch('http://localhost:3001/users', {
    next: { revalidate: 1 },
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}