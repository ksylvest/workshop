import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./app/graphql/app_schema.gql",
  generates: {
    "app/packs/application/graphql/app_schema.ts": {
      documents: "app/packs/application/graphql/**/*.gql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  config: {
    scalars: {
      DateTime: "string",
    },
  },
};

export default config;
