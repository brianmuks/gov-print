import { HelpCenter } from "@mui/icons-material";
import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconHelpCircle,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Stores",
  },

  {
    id: uniqueId(),
    title: "Stores",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    id: uniqueId(),
    title: "Categories",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    navlabel: true,
    subheader: "Jobs",
  },
  {
    id: uniqueId(),
    title: "In Progress",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Queued",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    id: uniqueId(),
    title: "Completed",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    id: uniqueId(),
    title: "Jobs",
    icon: IconUserPlus,
    href: "/authentication/register",
  },

  {
    navlabel: false,
    subheader: "Support",
  },

  {
    id: uniqueId(),
    title: "Need help ?",
    icon: IconHelpCircle,
    href: "/icons",
  },
  {
    navlabel: true,
    subheader: "Sample Pages",
  },

  {
    id: uniqueId(),
    title: "Documentation",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
