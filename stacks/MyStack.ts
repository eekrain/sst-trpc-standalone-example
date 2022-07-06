import {
  Api,
  ReactStaticSite,
  StackContext,
  NextjsSite,
  ApiCorsProps,
} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /{proxy+}": "functions/lambda.handler",
      "POST /{proxy+}": "functions/lambda.handler",
      "GET /anjing/notes": "functions/testing.handler",
    },
    cors: true,
    // cors: {
    //   allowHeaders: ["*"],
    //   allowMethods: ["ANY"],
    //   allowOrigins: ["*"],
    // },
  });

  const craSite = new ReactStaticSite(stack, "CraSite", {
    path: "my-cra",
    environment: {
      REACT_APP_API_URL: `${api.url}`,
    },
  });

  const nextSite = new NextjsSite(stack, "NextSite", {
    path: "my-next",
    environment: {
      API_URL: `${api.url}`,
    },
  });

  stack.addOutputs({
    CraUrl: craSite.url,
    NextUrl: nextSite.url,
    ApiEndpoint: api.url,
  });
}
