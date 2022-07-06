import {
  Api,
  ReactStaticSite,
  StackContext,
} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /hello": "functions/lambda.handler",
      "GET /notes": "functions/testing.handler",
    },
    cors: true,
  });

  const site = new ReactStaticSite(stack, "ReactSite", {
    path: "frontend",
    environment: {
      REACT_APP_API_URL: api.url,
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
