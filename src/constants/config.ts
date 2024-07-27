export const CONFIG = {
  serverUrl: process.env.NEXT_PUBLIC_REMOTE_SERVER_URL,
  googleMapKey: process.env.GOOGLE_API_KEY,
  api: {
    publications: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/publications`,
    mainPage: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/main-info`,
    sciencePage: `${process.env.NEXT_PUBLIC_REMOTE_SERVER_URL}/page-info/science`,
  },
}
