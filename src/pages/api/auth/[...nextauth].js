import NextAuth from "next-auth/next";
import GithubProvicer from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GithubProvicer({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ]
}

export default NextAuth(authOptions);