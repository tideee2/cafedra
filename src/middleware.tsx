import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { IsLoggedlocalStorageKey } from '@/constants/auth'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const isLogin = request.cookies.get(IsLoggedlocalStorageKey)

    if (isLogin) {
      return NextResponse.rewrite(
        new URL(request.nextUrl.pathname, request.url),
      )
    }
    else {
      console.log('not logged in')
      return NextResponse.rewrite(new URL('/login', request.url))
    }
  }
}
