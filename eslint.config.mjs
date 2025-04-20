import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "prefer-const": "error",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "error",
      
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    }
  }
];

export default eslintConfig;
