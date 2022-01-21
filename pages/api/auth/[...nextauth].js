import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../backend/models/user';
import dbConnect from '../../../backend/config/dbConnect';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        dbConnect();
        const { email, password } = credentials;
        // Check if email and password is entered
        if (!email || !password) {
          throw new Error('Please enter email or password');
        }

        // Find user in the database
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
          throw new Error('Invalid Email or Password');
        }

        // Check if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error('Invalid Email or Password');
        }

        return Promise.resolve(user);
      },
    }),
  ],
  // callbacks: {
  //   jwt: async (token, user) => {
  //     user && (token.user = user);
  //     return Promise.resolve(token);
  //   },
  //   session: async (session, user) => {
  //     session.user = user.user;
  //     return Promise.resolve(session);
  //   },
  // },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    encryption: true,
  },
  pages: {
    signIn: '/admin/login',
  },
});
