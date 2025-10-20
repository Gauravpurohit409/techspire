import { Font } from "@react-email/components";
import type React from "react";

function Inter(): React.ReactNode {
  return (
    <Font
      fontFamily="Inter"
      fallbackFontFamily="sans-serif"
      webFont={{
        url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",
        format: "woff2",
      }}
      fontWeight="100 900"
      fontStyle="normal"
    />
  );
}

const Fonts = {
  Inter,
};

export default Fonts;
