import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavigationDocument, SettingsDocument } from "@/prismicio-types";
import { ReactNode } from "react";

interface LayoutProps {
  navigation: NavigationDocument<string>;
  settings: SettingsDocument<string>;
  withHeaderDivider?: boolean;
  withProfile?: boolean;
  withSignUpForm?: boolean;
  children: ReactNode;
}

export function Layout({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}: LayoutProps) {
  return (
    <div className="text-slate-700">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
}
