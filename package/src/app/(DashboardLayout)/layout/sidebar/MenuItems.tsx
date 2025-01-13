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
    href: "/stores/list",
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
    href: "/jobs",
  },

  {
    id: uniqueId(),
    title: "Queued",
    icon: IconUserPlus,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Completed",
    icon: IconUserPlus,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Jobs",
    icon: IconUserPlus,
    href: "/jobs",
  },
  {
    navlabel: true,
    subheader: "Suppliers",
  },
  {
    id: uniqueId(),
    title: "Suppliers",
    icon: IconHelpCircle,
    href: "/suppliers",
  },
  {
    navlabel: true,
    subheader: "Delivery",
  },
  {
    id: uniqueId(),
    title: "Full Delivery",
    icon: IconHelpCircle,
    href: "/delivery",
  },
  {
    id: uniqueId(),
    title: "Part Delivery",
    icon: IconHelpCircle,
    href: "/delivery-part",
  },
  {
    id: uniqueId(),
    title: "Rejected",
    icon: IconHelpCircle,
    href: "/delivery-rejected",
  },

  {
    navlabel: true,
    subheader: "Invoices",
  },
  {
    id: uniqueId(),
    title: "Invoices",
    icon: IconHelpCircle,
    href: "/invoice",
  },

  {
    navlabel: true,
    subheader: "Reports",
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconHelpCircle,
    href: "/reports",
  },
  {
    id: uniqueId(),
    title: "Jobs",
    icon: IconHelpCircle,
    href: "/reports?2",
  },
  {
    id: uniqueId(),
    title: "Invoices",
    icon: IconHelpCircle,
    href: "/reports?2",
  },
  {
    id: uniqueId(),
    title: "Stores",
    icon: IconHelpCircle,
    href: "/reports?2",
  },

  {
    id: uniqueId(),
    title: "Suppliers",
    icon: IconHelpCircle,
    href: "/reports?2",
  },
  {
    id: uniqueId(),
    title: "Customers",
    icon: IconHelpCircle,
    href: "/reports?2",
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
    subheader: "Training Material",
  },

  {
    id: uniqueId(),
    title: "Training",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
