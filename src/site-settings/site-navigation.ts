export const HOME_PAGE = "/";
export const PROFILE_PAGE = "/profile";
export const YOUR_ORDER_PAGE = "/order";
export const HELP_PAGE = "/help";
export const TERMS_AND_SERVICES_PAGE = "/terms";
export const PRIVACY_POLICY_PAGE = "/privacy";

export const HOME_MENU_ITEM = {
  id: "nav.home",
  defaultMessage: "Home",
  href: HOME_PAGE,
};

export const PROFILE_MENU_ITEM = {
  id: "nav.profile",
  defaultMessage: "Profile",
  href: PROFILE_PAGE,
};

export const ORDER_MENU_ITEM = {
  id: "nav.order",
  defaultMessage: "Order",
  href: YOUR_ORDER_PAGE,
};

export const HELP_MENU_ITEM = {
  id: "nav.help",
  defaultMessage: "Help",
  href: HELP_PAGE,
};

export const TERMS_AND_SERVICES_MENU_ITEM = {
  id: "nav.terms_and_services",
  defaultMessage: "Terms and Services",
  href: TERMS_AND_SERVICES_PAGE,
};

export const PRIVACY_POLICY_MENU_ITEM = {
  id: "nav.privacy_policy",
  defaultMessage: "Privacy Policy",
  href: PRIVACY_POLICY_PAGE,
};

export const AUTHORIZED_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  HOME_MENU_ITEM,
  ORDER_MENU_ITEM,
  HELP_MENU_ITEM,
  TERMS_AND_SERVICES_MENU_ITEM,
  PRIVACY_POLICY_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];

export const LANGUAGE_MENU = [
  {
    id: "vn",
    defaultMessage: "Vietnam",
    icon: "SAFlag",
  },
  {
    id: "en",
    defaultMessage: "English",
    icon: "USFlag",
  },
];
