import  { cookies } from 'next/headers'

//Set session cookie
export const setSessionCookie = async (name: string, value: string,): Promise<void> => {
  const cookieStore = await cookies()
  cookieStore.set({
    name,
    value,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
}
//Get session cookie
export const getSessionCookie = async (name: string): Promise<string | undefined> => {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(name)
  return cookie ? cookie.value : undefined
}
//Delete session cookie
export const deleteSessionCookie = async (name: string): Promise<void> => {
  const cookieStore = await cookies()
  cookieStore.delete(name)
}