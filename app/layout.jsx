"use client";
import "./globals.css";
import { Providers } from "./providers";
import { Provider } from "react-redux";
import { store } from "./GlobalRedux/Store";

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Provider store={store}>
          <Providers attribute="class">{children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
