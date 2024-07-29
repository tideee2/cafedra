export const CONFIG = {
  serverUrl: process.env.NEXT_PUBLIC_REMOTE_SERVER_URL,
  googleMapKey: process.env.GOOGLE_API_KEY,
  api: {
    publications: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/publications`,
    mainPage: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/main-info`,
    sciencePage: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/page-info/science`,
    loginEndpoint: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/auth/login`,
    administration: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/administration`,
    news: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/blog`,
    contacts: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/contacts`,
  },
}
