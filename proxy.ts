import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const pathname = req.nextUrl.pathname;

      // 🔐 Protect dashboard only
      if (pathname.startsWith("/dashboard")) {
        return !!token;
      }

      // 🌍 Everything else (including /login) is public
      return true;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
