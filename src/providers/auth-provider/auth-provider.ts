"use client";

import { AuthProvider } from "@refinedev/core";
import { supabaseClient } from "@utility/supabase-client";

import nookies from "nookies";

const COOKIE_NAME = "token";
export const authProvider: AuthProvider = {
  login: async ({ email, password, remember }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error,
      };
    }

    if (data?.session) {
      nookies.set(null, COOKIE_NAME, data.session.access_token, {
        maxAge: remember ? 30 * 24 * 60 * 60 : undefined,
      });

      return {
        success: true,
        redirectTo: "/app",
      };
    }

    // for third-party login
    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    nookies.destroy(null, COOKIE_NAME);

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  register: async ({ email, password }) => {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        return {
          success: true,
          redirectTo: "/",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: false,
      error: {
        message: "Register failed",
        name: "Invalid email or password",
      },
    };
  },
  check: async (context) => {
    let user: any = undefined;
    if (context) {
      // for SSR
      const cookies = nookies.get(context);
      const { data } = await supabaseClient.auth.getUser(cookies[COOKIE_NAME]);
      user = data.user;
    } else {
      // for CSR
      const cookies = nookies.get(null);
      const { data } = await supabaseClient.auth.getUser(cookies[COOKIE_NAME]);
      user = data.user;
    }

    if (!user) {
      nookies.destroy(null, COOKIE_NAME);
      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Unauthorized",
        },
        logout: true,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  },
  getPermissions: async () => {
    const user = await supabaseClient.auth.getUser();

    if (user) {
      return user.data.user?.role;
    }

    return null;
  },
  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser();

    if (data?.user) {
      return {
        ...data.user,
        name: data.user.email,
      };
    }

    return null;
  },
  onError: async (error) => {
    if (error?.code === "PGRST301" || error?.code === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};
